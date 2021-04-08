const Property = require('../../models/city/detail/index.js');
const City = require('../../models/property/detail/index.js');
const County = require('../../models/county/detail/index.js');
const Neighborhood = require('../../models/neighborhood/detail/index.js');
const Zcta = require('../../models/zcta/detail/index.js');
const State = require('../../models/zcta/detail/index.js');
const District = require('../../models/district/detail/index.js');
const { normalizeError } = require('../../Error');
const { fetcher } = require('../../lib/fetcher');

const API_VERSION = 'v1';
const ENDPOINT_PREFIX = `/${API_VERSION}/location/detail`;

const models = {
  property: Property,
  city: City,
  county: County,
  neighborhood: Neighborhood,
  zcta: Zcta,
  state: State,
  cd: District,
};

const locationDetail = http =>
  // eslint-disable-next-line
   ({
    async getLocationByFSID(type, params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getLocationByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/${type}/${fsid}?key=${http.getKey()}`;

      const Model = models[type];
      const res = await fetcher(http, path, Model);

      return res;
    },
    async getLocationByLatLng(type, params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getLocationByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getLocationByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/${type}?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      const Model = models[type];

      const res = await fetcher(http, path, Model);

      return res;
    },
    async getLocationByAddress(type, params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getLocationByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/${type}?address=${encodeURI(address)}&key=${http.getKey()}`;

      const Model = models[type];
      const res = await fetcher(http, path, Model);

      return res;
    },
  });

module.exports = locationDetail;
