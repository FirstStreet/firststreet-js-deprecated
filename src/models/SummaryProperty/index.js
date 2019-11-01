const ResponseSummary = require('../ResponseSummary');

/**
 * @typedef {import('../../Api/summary').default***REMOVED*** LocationGeometry
*/

/**
 * FirstFloodRisk defines a first risk for a location
 * @typedef {Object***REMOVED*** FirstFloodRisk
 * @property {string***REMOVED*** floodID
 * @property {number***REMOVED*** year
*/

/**
 * @typedef {Object***REMOVED*** FloodRisk
 * @property {number***REMOVED*** year
 * @property {string***REMOVED*** floodID
 */

/**
 * @typedef {Array***REMOVED*** FloodRisks
 * @property {FloodRisk***REMOVED*** floodRisks
*/

/**
 * The recommended city of which is based on the property's zip code from the United States
 * Postal Service
 * @typedef {Object***REMOVED*** USPSCity
 * @property {string***REMOVED*** name
 * @property {string***REMOVED*** state
*/

/**
 * A Property
 * @typedef {Object***REMOVED*** SummaryProperty
 * @property {number***REMOVED*** FSID - The parcel unique identifier
 * @property {string***REMOVED*** primaryNumber - Address primary number
 * @property {string***REMOVED*** streetName - Address street name
 * @property {string***REMOVED*** lastUpdated - Last time parcel data was updated in the First Street
 * Foundation * API database
 * @property {string***REMOVED*** predirection - Address predirection
 * @property {string***REMOVED*** postdirection - Address postdirection
 * @property {number***REMOVED*** zipCode - Address zip code
 * @property {Object***REMOVED*** city - A City is associated with the requested Property. This
 * property may be `null` if the City has not been modeled in our database. If you require a city
 * name for display purposes, use uspsCity
 * @property {string***REMOVED*** state - The property state
 * @property {USPSCity***REMOVED*** uspsCity
 * @property {ParcelGeometry***REMOVED*** geometry - The viewport and bounding box of a location
 * @property {string***REMOVED*** femaZone - FEMA Zone
 * @property {number***REMOVED*** elevation - The elevation of a property
 * @property {number***REMOVED*** lotSize - The size of the property
 * @property {number***REMOVED*** countyFips - The county federal information processing standards code
*/

class SummaryProperty extends ResponseSummary {
  constructor(data) {
    super(data);
    this.data = data;
    this.location = this.results.location;
  ***REMOVED***

  get FSID() {
    return this.location.FSID;
  ***REMOVED***

  get primaryNumber() {
    return this.location.primaryNumber;
  ***REMOVED***

  get lastUpdated() {
    return this.location.lastUpdated;
  ***REMOVED***

  get streetName() {
    return this.location.streetName;
  ***REMOVED***

  get zipCode() {
    return this.location.zipCode;
  ***REMOVED***

  get city() {
    // this field is a relationship to a city parcel
    return this.location.city.Name;
  ***REMOVED***

  get cityID() {
    return this.location.city.ID;
  ***REMOVED***

  get uspsCity() {
    return this.location.uspsCity;
  ***REMOVED***

  get state() {
    return this.location.state;
  ***REMOVED***

  get geometry() {
    return this.location.geometry;
  ***REMOVED***

  get polygon() {
    // todo: parse nested coordinates arrays
    return this.location.geometry.polygon.coordinates;
  ***REMOVED***

  get polygonGeoJSON() {
    return this.location.geometry.polygon;
  ***REMOVED***

  get center() {
    return this.location.geometry.center.coordinates;
  ***REMOVED***

  get centerGeoJSON() {
    return this.location.geometry.center;
  ***REMOVED***

  get bounds() {
    // todo: parse nested coordinates arrays
    return this.location.geometry.bounds.coordinates;
  ***REMOVED***

  get boundsGeoJSON() {
    return this.location.geometry.bounds;
  ***REMOVED***

  get elevation() {
    return this.location.elevation;
  ***REMOVED***

  get femaZone() {
    return this.location.femaZone;
  ***REMOVED***

  get lotSize() {
    return this.location.lotSize;
  ***REMOVED***

  get countyFips() {
    return this.location.countyFips;
  ***REMOVED***

  get firstFloodRisk() {
    return this.results.firstFloodRisk;
  ***REMOVED***

  get floodRisks() {
    return this.results.floodRisks;
  ***REMOVED***
***REMOVED***

module.exports = SummaryProperty;
