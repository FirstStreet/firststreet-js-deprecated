const { normalizeError ***REMOVED*** = require('../../Error');
const Property = require('../../models/Property');

/**
 * @typedef {import('../models/property').default***REMOVED*** ParcelProperty
*/


/**
 * A City property on the parcel
 * @typedef {Object***REMOVED*** ParcelCityForProperty
 * @property {number***REMOVED*** ID - The city unique identifier
 * @property {string***REMOVED*** name - The city name
*/

/**
 * A Parcel City
 * @typedef {Object***REMOVED*** ParcelCity
 * @property {number***REMOVED*** ID - The city unique identifier
 * @property {string***REMOVED*** name - The city name
 * @property {string***REMOVED*** state - The city state
 * @property {ParcelGeometry***REMOVED*** geometry - The viewport and bounding box of a location
 */

/**
 * A ParcelGeometry which contains a polygon (boundingbox) and the Bound (viewport) of a location
 * @typedef {Object***REMOVED*** ParcelGeometry
 * @property {string***REMOVED*** polygon - The bounding box of the location
 * @property {string***REMOVED*** center - The center of the location
 * @property {string***REMOVED*** bounds - The bounds of the location
 */

const ENDPOINT_PREFIX = `${process.env.HTTP_HOST***REMOVED***/data/${process.env.VERSION***REMOVED***/parcel/`;

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
        return normalizeError('Expected required id. Usage: .getPropertyByID([id])');
      ***REMOVED***

      const path = `${ENDPOINT_PREFIX***REMOVED***${id***REMOVED***?type=property&key=${http.getKey()***REMOVED***`;


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
        return normalizeError('Expected required id. Usage: .getCityByID([id])');
      ***REMOVED***

      const path = `${ENDPOINT_PREFIX***REMOVED***${id***REMOVED***?type=city&key=${http.getKey()***REMOVED***`;

      try {
        const response = await http.excecute('GET', path);

        const { errors, messages ***REMOVED*** = response;

        if (errors) {
          return normalizeError(messages);
        ***REMOVED***

        return response;
      ***REMOVED*** catch (e) {
        return normalizeError(null, e);
      ***REMOVED***
    ***REMOVED***,
  ***REMOVED***);
module.exports = parcel;
