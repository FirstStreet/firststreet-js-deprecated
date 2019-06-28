const BaseModel = require('../index');

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

class Property extends BaseModel {
  constructor(data) {
    super(data);
    this.data = data;
  ***REMOVED***
***REMOVED***

module.exports = Property;
