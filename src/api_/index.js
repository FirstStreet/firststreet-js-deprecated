const _ = require('lodash/core');
const assert = require('assert');
const resolver = require('./resolver');

const COORDINATE = 'coordinate';
const FSID = 'fsid';
const ADDRESS = 'address';

const allowedLookupParameters = [COORDINATE, FSID, ADDRESS];
const LOCALES = ['state', 'city', 'county', 'zcta', 'cd', 'neighborhood', 'tract', 'property'];
const allowedDetailLevels={
  location: ['detail', 'summary'],
probability:[]
}

/**
 * api wrapper
 * @constructor
 * @param {Object} http - Http request module
 */
class Api {
  #locality

  #params

  #lookupType=''

  constructor(http) {
    this.http = http;
  }

  fetchData(type, detailLevel) {
    let response = null;
    let service = null;

    switch (detailLevel) {
    case 'summary':
      service = this.summary;
      break;

    case 'detail':
      service = this.detail;
      break;

    case 'cumulative':
      service = this.cumulative;
      break;

    default:
      return null;
    }

    if (service) {
      if (this.lookupType === FSID) {
        response = service.getByFSID(type, this.params);
      }
      if (this.lookupType === ADDRESS) {
        response = service.getByAddress(type, this.params);
      }
      if (this.lookupType === COORDINATE) {
        response = service.getByLatLng(type, this.params);
      }
    } else {
      throw new Error('Must provide a service');
    }

    return response;
  }

  location(service) {
    return this.fetchData(this.#locality, service);
  }

  // probability(service) {
  //   assert(this.#lookupType!='')
  //   return this.fetchData(this.#locality, service);
  // }

  lookup(locality, params) {
    // lookup type
    if (!locality) {
      throw new Error('Parameter \'locality\' is required');
    }

    if (!LOCALES.includes(locality)) {
      throw new Error(`Must provide a valid locality. Allowed: ${LOCALES.join(', ')}`);
    }
    this.#locality = locality;

    // lookup parameters
    if (!params) {
      throw new Error('Missing lookup parameters.');
    }

    const diff = _.difference(allowedLookupParameters, Object.keys(params));
    if (diff && diff.length > 0) {
      throw new Error(`Parameter(s) unknown: ${diff.join(', ')}. Allowed lookup parameters: ${allowedLookupParameters.join(', ')}`);
    }

    this.#params = params;
    this.#setLookupType(params);

    return this;
  }

  #setLookupType(params) {
    if (params.fsid || params.fsid === null) {
      this.#lookupType = FSID;
    } else if ((params.lat || params.lat === null) || (params.lng || params.lng === null)) {
      this.#lookupType = COORDINATE;
    } else if (params.address || params.address === null) {
      this.#lookupType = ADDRESS;
    }
  }


  bindTo(context) {
    const ctx = context;

    ctx.lookup = this.lookup;
    ctx.location = this.location;
    ctx.probability = this.probability;
    ctx.fetchData = this.fetchData;
    ctx.setLookupType = this.setLookupType;

    ctx.resolver = resolver(this.http);
  }
}

module.exports = Api;
