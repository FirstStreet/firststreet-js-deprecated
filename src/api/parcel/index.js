const { normalizeError } = require('../../Error/index.js');
const Property = require('../../models/property/index.js');
const City = require('../../models/city/index.js');

/**
 * @typedef {import('../models/Property').default} ParcelProperty
 * @typedef {import('../models/City').default} ParcelCity
*/


/**
 * A City property on the parcel
 * @typedef {Object} ParcelCityForProperty
 * @property {number} ID - The city unique identifier
 * @property {string} name - The city name
*/

/**
 * A ParcelGeometry which contains a polygon (boundingbox) and the Bound (viewport) of a location
 * @typedef {Object} ParcelGeometry
 * @property {string} polygon - The bounding box of the location
 * @property {string} center - The center of the location
 * @property {string} bounds - The bounds of the location
 */

const ENDPOINT_PREFIX = '/data/1.0/parcel';

const parcel = http =>
  /**
   * getPropertyByID retrieves a property parcel by its unique identifier
   * @param {string} id - parcel unique identifier
   * @returns {ParcelProperty}
  */
  // eslint-disable-next-line
   ({
    async getPropertyByID(id) {
      if (!id) {
        return normalizeError('Expected required id. Usage: .getPropertyByID(id)');
      }

      const path = `${ENDPOINT_PREFIX}/${id}?type=property&key=${http.getKey()}`;
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
    async getCityByID(id) {
      if (!id) {
        return normalizeError('Expected required id. Usage: .getCityByID(id)');
      }

      const path = `${ENDPOINT_PREFIX}/${id}?type=city&key=${http.getKey()}`;

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
    async getParcelByLatLng(lat, lng, type = 'property', range = 100) {
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
      }

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
      }

      const path = `${ENDPOINT_PREFIX}?lat=${lat}&lng=${lng}&type=${type}&key=${http.getKey()}`;

      try {
        const response = await http.execute('GET', path);

        const {
          errors,
          message,
        } = response;

        if (errors) {
          return normalizeError(message);
        }

        if (type === 'city') {
          const model = new City(response.body);
          return model;
        }

        const model = new Property(response.body);
        return model;
      } catch (e) {
        return normalizeError(null, e);
      }
    },
  });
module.exports = parcel;
