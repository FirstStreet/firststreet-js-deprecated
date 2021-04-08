const summary = require('./summary');
const detail = require('./detail');

const COORDINATE = 'coordinate';
const FSID = 'fsid';
const ADDRESS = 'address';

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
      this.lookupType = FSID;
    } else if (params.lat || params.lng) {
      this.lookupType = COORDINATE;
    } else if (params.address) {
      this.lookupType = ADDRESS;
    }
  }

  property(serviceName) {
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
        response = service.getPropertyByFSID(this.params);
      }
      if (this.lookupType === ADDRESS) {
        response = service.getPropertyByAddress(this.params);
      }
      if (this.lookupType === COORDINATE) {
        response = service.getPropertyByLatLng(this.params);
      }
    } else {
      throw new Error('Must provide a service');
    }

    return response;
  }

  city(serviceName) {
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
        response = service.getCityByFSID(this.params);
      }
      if (this.lookupType === ADDRESS) {
        response = service.getCityByAddress(this.params);
      }
      if (this.lookupType === COORDINATE) {
        response = service.getCityByLatLng(this.params);
      }
    } else {
      throw new Error('Must provide a service');
    }

    return response;
  }

  state(serviceName) {
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
        response = service.getStateByFSID(this.params);
      }
      if (this.lookupType === ADDRESS) {
        response = service.getStateByAddress(this.params);
      }
      if (this.lookupType === COORDINATE) {
        response = service.getStateByLatLng(this.params);
      }
    } else {
      throw new Error('Must provide a service');
    }

    return response;
  }

  neighborhood(serviceName) {
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
        response = service.getNeighborhoodByFSID(this.params);
      }
      if (this.lookupType === ADDRESS) {
        response = service.getNeighborhoodByAddress(this.params);
      }
      if (this.lookupType === COORDINATE) {
        response = service.getNeighborhoodByLatLng(this.params);
      }
    } else {
      throw new Error('Must provide a service');
    }

    return response;
  }

  zcta(serviceName) {
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
        response = service.getZctaByFSID(this.params);
      }
      if (this.lookupType === ADDRESS) {
        response = service.getZctaByAddress(this.params);
      }
      if (this.lookupType === COORDINATE) {
        response = service.getZctaByLatLng(this.params);
      }
    } else {
      throw new Error('Must provide a service');
    }

    return response;
  }

  county(serviceName) {
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
        response = service.getCountyByFSID(this.params);
      }
      if (this.lookupType === ADDRESS) {
        response = service.getCountyByAddress(this.params);
      }
      if (this.lookupType === COORDINATE) {
        response = service.getCountyByLatLng(this.params);
      }
    } else {
      throw new Error('Must provide a service');
    }

    return response;
  }

  district(serviceName) {
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
        response = service.getDistrictByFSID(this.params);
      }
      if (this.lookupType === ADDRESS) {
        response = service.getDistrictByAddress(this.params);
      }
      if (this.lookupType === COORDINATE) {
        response = service.getDistrictByLatLng(this.params);
      }
    } else {
      throw new Error('Must provide a service');
    }

    return response;
  }


  location(service) {
    // service is a str mapping to api location services
    switch (this.type) {
      case 'property': {
        return this.property(service);
      }

      case 'city': {
        return this.city(service);
      }

      case 'neighborhood': {
        return this.neighborhood(service);
      }

      case 'state': {
        return this.state(service);
      }

      case 'cd': {
        return this.district(service);
      }

      case 'zcta': {
        return this.zcta(service);
      }

      case 'county': {
        return this.county(service);
      }

      default: {
        throw new Error('Must provide a valid location type');
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
    ctx.city = this.city;
    ctx.neighborhood = this.neighborhood;
    ctx.zcta = this.zcta;
    ctx.county = this.county;
    ctx.state = this.state;
    ctx.district = this.district;
    ctx.setLookupType = this.setLookupType;

    ctx.summary = summary(this.http);
    ctx.detail = detail(this.http);
  }
}

module.exports = Api;
