const Property = require('../../models/Property/index.js');
const City = require('../../models/City/index.js');
const { normalizeError ***REMOVED*** = require('../../Error');

/**
 * @typedef {import('../models/Property').default***REMOVED*** ParcelProperty
 * @typedef {import('../models/City').default***REMOVED*** ParcelCity
*/


/**
 * A City property on the parcel
 * @typedef {Object***REMOVED*** ParcelCityForProperty
 * @property {number***REMOVED*** ID - The city unique identifier
 * @property {string***REMOVED*** name - The city name
*/

/**
 * A ParcelGeometry which contains a polygon (boundingbox) and the Bound (viewport) of a location
 * @typedef {Object***REMOVED*** ParcelGeometry
 * @property {string***REMOVED*** polygon - The bounding box of the location
 * @property {string***REMOVED*** center - The center of the location
 * @property {string***REMOVED*** bounds - The bounds of the location
 */

const ENDPOINT_PREFIX = '/data/1.0/parcel';

const parcel = http =>
  /**
   * getPropertyByID retrieves a property parcel by its unique identifier
   * @param {string***REMOVED*** id - parcel unique identifier
   * @returns {ParcelProperty***REMOVED***
  */
  // eslint-disable-next-line
   ({
    async getPropertyByID(id) {
      if (!id) {
        return normalizeError('Expected required id. Usage: .getPropertyByID(id)');
      ***REMOVED***

      const path = `${ENDPOINT_PREFIX***REMOVED***/${id***REMOVED***?type=property&key=${http.getKey()***REMOVED***`;
      try {
        const response = await http.execute('GET', path);
        const { errors, messages ***REMOVED*** = response;
        if (errors) {
          return normalizeError(messages);
        ***REMOVED***
        const model = new Property(response.body);
        return model;
      ***REMOVED*** catch (e) {
        return normalizeError(null, e);
      ***REMOVED***
    ***REMOVED***,
    async getCityByID(id) {
      if (!id) {
        return normalizeError('Expected required id. Usage: .getCityByID(id)');
      ***REMOVED***

      const path = `${ENDPOINT_PREFIX***REMOVED***/${id***REMOVED***?type=city&key=${http.getKey()***REMOVED***`;

      try {
        const response = await http.execute('GET', path);


        const { errors, messages ***REMOVED*** = response;

        if (errors) {
          return normalizeError(messages);
        ***REMOVED***

        const model = new City(response.body);
        return model;
      ***REMOVED*** catch (e) {
        return normalizeError(null, e);
      ***REMOVED***
    ***REMOVED***,
    async getParcelByLatLng(lat, lng, type = 'property') {
      if (!lat) {
        return normalizeError('Expected required lat. Usage: .getPropertyByLatLng(lat, lng)');
      ***REMOVED***

      if (!lng) {
        return normalizeError('Expected required lng. Usage: .getPropertyByLatLng(lat, lng)');
      ***REMOVED***

      const path = `${ENDPOINT_PREFIX***REMOVED***?lat=${lat***REMOVED***&lng=${lng***REMOVED***&type=${type***REMOVED***&key=${http.getKey()***REMOVED***`;

      try {
        const response = await http.execute('GET', path);

        const {
          errors,
          message,
        ***REMOVED*** = response;

        if (errors) {
          return normalizeError(message);
        ***REMOVED***

        if (type === 'city') {
          const model = new City(response.body);
          return model;
        ***REMOVED***

        const model = new Property(response.body);
        return model;
      ***REMOVED*** catch (e) {
        return normalizeError(null, e);
      ***REMOVED***
    ***REMOVED***,
  ***REMOVED***);
module.exports = parcel;
