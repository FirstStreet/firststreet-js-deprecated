const dataSummary = require('./summary');
// const hurricane = require('./hurricane');
// const tidal = require('./tidal');
// const mvi = require('./marketValueImpact');

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
    if (params.fsid) {
      this.lookupType = 'fsid';
    } else if (params.lat && params.lng) {
      this.lookupType = 'coordinate';
    } else if (params.address) {
      this.lookupType = 'address';
    } else {
      throw new Error('Invalid lookup parameters');
    }
  }

  property(serviceName) {
    let response = null;

    switch (serviceName) {
      case 'summary': {
        const data = this.summary;

        if (this.lookupType === 'fsid') {
          response = data.getPropertyByFSID(this.params);
        }
        if (this.lookupType === 'address') {
          response = data.getPropertyByAddress(this.params);
        }
        if (this.lookupType === 'coordinate') {
          response = data.getPropertyByLatLng(this.params);
        }
        break;
      }

      case 'detail': {
        // todo: write handlers for location detail service
        return null;
      }

      default: {
        return null;
      }
    }

    return response;
  }

  location(service) {
    // service is a str mapping to api location services
    switch (this.type) {
      case 'property': {
        return this.property(service);
      }

      default: {
        return null;
      }
    }
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
    ctx.property = this.property;
    ctx.setLookupType = this.setLookupType;

    ctx.summary = dataSummary(this.http);
    // ctx.hurricane = hurricane(this.http);
    // ctx.tidal = tidal(this.http);
    // ctx.mvi = mvi(this.http);
  }
}

module.exports = Api;
