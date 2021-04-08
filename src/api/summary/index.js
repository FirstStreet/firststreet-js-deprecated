const Property = require('../../models/property/summary/index.js');
const City = require('../../models/city/summary/index.js');
const LocalitySummary = require('../../models/LocalitySummary');
const { normalizeError } = require('../../Error');
const { fetcher } = require('../../lib/fetcher.js');

const API_VERSION = 'v1';

/**
 * @typedef {import('../models/Property').default} SummaryProperty
 * @typedef {import('../models/City').default} CityProperty
*/

/**
 * A City
 * @typedef {Object} PropertyCity
 * @property {number} FSID - The city unique identifier
 * @property {string} name - The city name
*/

/**
 * A LocationGeometry which contains a polygon (boundingbox) and the Bound (viewport) of a location
 * @typedef {Object} LocationGeometry
 * @property {string} polygon - The bounding box of the location
 * @property {string} center - The center of the location
 * @property {string} bounds - The bounds of the location
*/

const ENDPOINT_PREFIX = `/${API_VERSION}/location/summary`;

const models = {
  property: Property,
  city: City,
  county: LocalitySummary,
  neighborhood: LocalitySummary,
  zcta: LocalitySummary,
  state: LocalitySummary,
  cd: LocalitySummary,
};

const summary = http =>
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

module.exports = summary;
