const assert = require('assert');
const _ = require('lodash');

const { fetcher } = require('../lib/fetcher.js');

class Resolver {
  _http;

  constructor(http) {
    this._http = http;
  }

  _concatParametersForUrl(params, excludeParams) {
    const restOfParams = _.omit(params, excludeParams);
    return _.reduce(restOfParams, (res, val, key) => `${res}&${key}=${val}`, '');
  }

  async getServiceResponse(mapping, params, locationType, lookupType) {
    let model = mapping.model.all;
    if (!model && locationType) {
      model = mapping.model[locationType];
    }
    assert(model, `Internal error: cannot get model for endpoint ${mapping.endpointPrefix}`);

    let path = mapping.endpointPrefix;
    if (mapping.needsLocation) {
      path = `${path}/${locationType}`;
    }

    switch (lookupType) {
    case 'fsid':
      path = `${path}/${params.fsid}?key=${this._http.getKey()}`;
      path = `${path}${this._concatParametersForUrl(params, ['fsid'])}`;
      break;
    case 'coordinate':
    case 'address':
      path = `${path}?key=${this._http.getKey()}`;
      path = `${path}${this._concatParametersForUrl(params, [])}`;
      break;
    case 'id':
      path = `${path}/${params.id}?key=${this._http.getKey()}`;
      path = `${path}${this._concatParametersForUrl(params, ['id'])}`;
      break;
    default:
      throw new Error(`Internal error: lookup by ${lookupType} is not implemented`);
    }
    const res = await fetcher(this._http, path, model);
    return res;
  }
}

module.exports = Resolver;
