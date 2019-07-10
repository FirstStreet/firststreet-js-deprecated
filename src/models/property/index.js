const BaseModel = require('../base/index.js');

/**
 * @typedef {import('../../api/parcel').default***REMOVED*** ParcelGeometry
*/

/**
 * A Property
 * @typedef {Object***REMOVED*** ParcelProperty
 * @property {number***REMOVED*** ID - The parcel unique identifier
 * @property {string***REMOVED*** primaryNumber - The street number
 * @property {string***REMOVED*** streetName - The street number
 * @property {string***REMOVED*** lastUpdated - date property data last updated
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

  get primaryNumber() {
    return this.data.primaryNumber;
  ***REMOVED***

  get lastUpdated() {
    return this.data.lastUpdated;
  ***REMOVED***

  get streetName() {
    return this.data.streetName;
  ***REMOVED***

  get zipCode() {
    return this.data.zipCode;
  ***REMOVED***

  get city() {
    // this field is a relationship to a city parcel
    return this.data.city.Name;
  ***REMOVED***

  get cityID() {
    return this.data.city.ID;
  ***REMOVED***

  get state() {
    return this.data.state;
  ***REMOVED***

  get polygon() {
    // todo: parse nested coordinates arrays
    return this.data.geometry.polygon.coordinates;
  ***REMOVED***

  get polygonGeoJSON() {
    return this.data.geometry.polygon;
  ***REMOVED***

  get center() {
    return this.data.geometry.center.coordinates;
  ***REMOVED***

  get centerGeoJSON() {
    return this.data.geometry.center;
  ***REMOVED***

  get bounds() {
    // todo: parse nested coordinates arrays
    return this.data.geometry.bounds.coordinates;
  ***REMOVED***

  get boundsGeoJSON() {
    return this.data.geometry.bounds;
  ***REMOVED***

  get elevation() {
    return this.data.elevation;
  ***REMOVED***

  get femaZone() {
    return this.data.femaZone;
  ***REMOVED***

  get lotSize() {
    return this.data.lotSize;
  ***REMOVED***

  get floorArea() {
    return this.data.floorArea;
  ***REMOVED***

  get landUse() {
    return this.data.landUse;
  ***REMOVED***

  get countyFips() {
    return this.data.countyFips;
  ***REMOVED***

  get distance() {
    return this.data.distance;
  ***REMOVED***
***REMOVED***

module.exports = Property;
