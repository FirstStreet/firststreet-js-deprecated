const ResponseSummary = require('../ResponseSummary');

// todo: update jsdocs
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
  ***REMOVED***

  get FSID() {
    return this.data.fsid;
  ***REMOVED***

  get floodFactor() {
    return this.data.floodFactor;
  ***REMOVED***

  get riskDirection() {
    return this.data.riskDirection;
  ***REMOVED***

  get environmentalRisk() {
    return this.data.environmentalRisk;
  ***REMOVED***

  get historic() {
    return this.data.historic;
  ***REMOVED***

  get adaptation() {
    return this.data.adaptation;
  ***REMOVED***
***REMOVED***

module.exports = SummaryProperty;
