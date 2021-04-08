const summary = require('./summary');
const detail = require('./detail');

const COORDINATE = 'coordinate';
const FSID = 'fsid';
const ADDRESS = 'address';
const TYPES = ['state', 'city', 'county', 'zcta', 'cd', 'neigbhorhood', 'property'];

/**
 * api wrapper
 * @constructor
 * @param {Object} http - Http request module
 */
class Api {
  constructor(http) {
    this.http = http;
    this.type = null;
    this.params = null;
    this.lookupType = '';
  }

  setLookupType(params) {
    if (params.fsid || params.fsid === null) {
      this.lookupType = FSID;
    } else if ((params.lat || params.lat === null) || (params.lng || params.lng === null)) {
      this.lookupType = COORDINATE;
    } else if (params.address || params.address === null) {
      this.lookupType = ADDRESS;
    }
  }

  fetchData(type, serviceName) {
    let response = null;
    let service = null;

    switch (serviceName) {
      case 'summary':
        service = this.summary;
        break;

      case 'detail':
        service = this.detail;
        break;

      default:
        return null;
    }

    if (service) {
      if (this.lookupType === FSID) {
        response = service.getLocationByFSID(type, this.params);
      }
      if (this.lookupType === ADDRESS) {
        response = service.getLocationByAddress(type, this.params);
      }
      if (this.lookupType === COORDINATE) {
        response = service.getLocationByLatLng(type, this.params);
      }
    } else {
      throw new Error('Must provide a service');
    }

    return response;
  }

  location(service) {
    // service is a str mapping to api location services

    if (!TYPES.includes(this.type)) {
      throw new Error('Must provide a valid location type');
    }

    return this.fetchData(this.type, service);
  }

  lookup(type, params) {
    // type equals the locationtype
    // params can be an fsid, lat & lng, or an address
    if (!type) {
      throw new Error('Missing location type.');
    }

    if (!params) {
      throw new Error('Missing lookup parameters.');
    }

    this.type = type;
    this.params = params;
    this.setLookupType(params);

    return this;
  }

  bindTo(context) {
    const ctx = context;

    ctx.lookup = this.lookup;
    ctx.location = this.location;
    ctx.fetchData = this.fetchData;
    ctx.setLookupType = this.setLookupType;

    ctx.summary = summary(this.http);
    ctx.detail = detail(this.http);
  }
}

module.exports = Api;
