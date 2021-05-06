import mapping from './ApiMapping';

const assert = require('assert');
const _ = require('lodash');

const COORDINATE = 'coordinate';
const FSID = 'fsid';
const ADDRESS = 'address';
const LAT = 'lat';
const LNG = 'lng';

const allowedLookupParameters = [FSID, ADDRESS, LAT, LNG];

const localities = ['state', 'city', 'county', 'zcta', 'cd', 'neighborhood', 'tract', 'property'];

class Api {
  constructor(resolver) {
    this._resolver = resolver;
  }

  callService(service, detailLevel, serviceParams) {
    assert(detailLevel, 'Detail level is required');

    // find mapping for the endpoint
    const endpointMapping = mapping(service, detailLevel);

    assert(endpointMapping, `Internal error: cannot find mapping for ${service}/${detailLevel}`);
    assert(
      !endpointMapping.needsLocation
      || (endpointMapping.needsLocation && localities.includes(this._locationType)),
      `Please set lookup parameters prior to calling service "${service}"`,
    );

    // validate there's no unknown parameters
    const params = serviceParams || {};
    const allowedParameters = endpointMapping.allowedParameters || [];
    assert(
      _.difference(Object.keys(params), allowedParameters).length <= 0,
      `Unknown parameter(s): ${_.difference(Object.keys(params), allowedParameters)}`,
    );

    // if not location lookup then check lookup type
    let lookupType = this._lookupType;
    if (!endpointMapping.needsLocation) {
      assert(_.intersection(Object.keys(params), allowedParameters).length > 0, `Service ${service}/${detailLevel} parameter(s) are missing. Required: ${allowedParameters.join(', ')}`);
      [lookupType] = endpointMapping.allowedParameters;
    }

    // get response
    return this._resolver.getServiceResponse(
      endpointMapping,
      _.merge(this._lookupParams || {}, params),
      this._locationType,
      lookupType,
    );
  }

  static checkLookupParams(params) {
    assert(params, 'Missing lookup parameters');
    assert(typeof params === 'object', 'Lookup parameters need to be in an object');
    assert(_.difference(Object.keys(params), allowedLookupParameters).length <= 0, `Unknown parameter(s): ${_.difference(Object.keys(params), allowedLookupParameters)}`);
  }

  setLookupType(params) {
    Api.checkLookupParams(params);

    if (params.fsid) {
      this._lookupType = FSID;
    } else if (params.address) {
      this._lookupType = ADDRESS;
    } else if (params[LAT] || params[LNG]) {
      assert(params[LAT] && params[LNG], 'Must provide both latitude and longitude for coordinate lookup');
      this._lookupType = COORDINATE;
    } else {
      throw new Error(`Must provide a valid lookup parameter(${allowedLookupParameters.join(', ')})`);
    }
  }

  lookup(locationType, params) {
    // type equals the locationtype
    // params can be an fsid, lat & lng, or an address
    assert(locationType && localities.includes(locationType), `Must provide a valid location type(${localities.join(', ')})`);
    this._locationType = locationType;
    this._lookupParams = params;
    this.setLookupType(params);

    return this;
  }

  bindTo(context) {
    const ctx = context;

    ctx.lookup = this.lookup;
    ctx.location = _.partial(this.callService, 'location');
    ctx.probability = _.partial(this.callService, 'probability');
    ctx.historic = _.partial(this.callService, 'historic');
    ctx.economic = _.partial(this.callService, 'economic');
    ctx.adaptation = _.partial(this.callService, 'adaptation');

    ctx.setLookupType = this.setLookupType;
    ctx._resolver = this._resolver;
  }
}

module.exports = Api;
