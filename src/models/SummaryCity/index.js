const Response = require('../Response');

/**
 * @typedef {import('../../Api/parcel').default***REMOVED*** LocationGeometry
 */

/**
 * A city property
 * @typedef {Object***REMOVED*** CityProperty
 * @property {number***REMOVED*** FSID - The city unique identifier
 * @property {string***REMOVED*** name - The city name
 * @property {string***REMOVED*** state - The city state
 * @property {LocationGeometry***REMOVED*** geometry - The viewport and bounding box of a location
*/

class City extends Response {
  constructor(data) {
    super(data);
    this.data = data;
    this.location = this.results.location;
  ***REMOVED***

  get FSID() {
    return this.location.FSID;
  ***REMOVED***

  get name() {
    return this.location.name;
  ***REMOVED***

  get state() {
    return this.location.state;
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
    return this.location.geometry.bbox.coordinates;
  ***REMOVED***

  get boundsGeoJSON() {
    return this.location.geometry.bbox;
  ***REMOVED***

  get firstFloodRisk() {
    return this.results.firstFloodRisk;
  ***REMOVED***

  get floodRisks() {
    return this.results.floodRisks;
  ***REMOVED***
***REMOVED***

module.exports = City;
