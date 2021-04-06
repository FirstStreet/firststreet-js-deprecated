const Property = require('../../models/SummaryProperty/index.js');
const City = require('../../models/SummaryCity/index.js');
const { normalizeError } = require('../../Error');

const SUMMARY_VERSION = 'v1';

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

const ENDPOINT_PREFIX = `/${SUMMARY_VERSION}/location/summary`;

const dataSummary = http =>
  // eslint-disable-next-line
   ({
    async getPropertyByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getPropertyByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/property/${fsid}?key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);
        const { errors, messages } = response;

        if (errors) {
          return normalizeError(messages);
        }


        const model = new Property(response.body);

        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
    async getCityByFSID(params) {
      const { fsid } = params;
      if (!fsid) {
        return normalizeError('Expected required FSID. Usage: .getCityByFSID(fsid)');
      }

      const path = `${ENDPOINT_PREFIX}/city/${fsid}?key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);
        const { errors, messages } = response;

        if (errors) {
          return normalizeError(messages);
        }

        const model = new City(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
    async getPropertyByLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/property?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);

        const {
          errors,
          message,
        } = response;

        if (errors) {
          return normalizeError(message);
        }

        const model = new Property(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
    async getCityByLatLng(params) {
      const { lat, lng } = params;
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getCityByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getCityByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}/city?lat=${lat}&lng=${lng}&key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);

        const {
          errors,
          message,
        } = response;

        if (errors) {
          return normalizeError(message);
        }

        const model = new City(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
    async getPropertyByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getPropertyByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/property?address=${encodeURI(address)}&key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);

        const {
          errors,
          message,
        } = response;

        if (errors) {
          return normalizeError(message);
        }

        const model = new Property(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
    async getCityByAddress(params) {
      const { address } = params;

      if (!address) {
        return normalizeError('Expected required address. Usage: .getCityByAddress(address)');
      }

      const path = `${ENDPOINT_PREFIX}/city?address=${encodeURI(address)}&key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);

        const { errors, message } = response;

        if (errors) {
          return normalizeError(message);
        }

        const model = new City(response.body);

        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
  });

module.exports = dataSummary;
