const { normalizeError ***REMOVED*** = require('../../Error');

/**
 * A Property
 * @typedef {Object***REMOVED*** ParcelProperty
 * @property {number***REMOVED*** ID - The parcel unique identifier
 * @property {string***REMOVED*** primaryNumber - The street number
 * @property {string***REMOVED*** streetName - The street number
 * @property {string***REMOVED*** predirection - an address element placed before the street
 * name that indicates its the geographic location
 * @property {string***REMOVED*** postdirection - an address element placed after the street
 * name as a trailing designator such as ST for street or RD for road
 * @property {number***REMOVED*** zipCode - The property zip code
 * @property {ParcelCityForProperty***REMOVED*** city - The property city
 * @property {string***REMOVED*** state - The property state
 * @property {ParcelGeometry***REMOVED*** geometry - The viewport and bounding box of a location
 * @property {number***REMOVED*** elevation - The elevation of a property
 * @property {number***REMOVED*** lotSize - The size of the property
 * @property {number***REMOVED*** floorArea - The size of the home
 * @property {string***REMOVED*** landUse - The lot land use designator
 * @property {number***REMOVED*** countyFips - The county federal information processing standards code
 * @property {number***REMOVED*** distance - The distance
 */

// Todo: what is distance?, what is the units for elevation, lotSize, floorArea?

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

const ENDPOINT_PREFIX = '/data/parcel/';

const parcel = (http) => {
  /**
   * getPropertyByID retrieves a property parcel by its unique identifier
   * @param {string***REMOVED*** id - parcel unique identifier
   * @returns {ParcelProperty***REMOVED***
  */
  // eslint-disable-next-line
  async function getPropertyByID(id) {
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

      return response;
    ***REMOVED*** catch (e) {
      return normalizeError(null, e);
    ***REMOVED***
  ***REMOVED***

  /**
   * getCityByID retreives a Parcel City by its unique identifier
   * @param {string***REMOVED*** id
   * @returns {ParcelCity***REMOVED***
  */
  // eslint-disable-next-line
  async function getCityByID(id) {
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
    ***REMOVED*** catch (e) {
      return normalizeError(null, e);
    ***REMOVED***
  ***REMOVED***
***REMOVED***;

module.exports = parcel;
