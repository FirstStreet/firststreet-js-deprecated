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
  ***REMOVED***

  get FSID() {
    return this.data.FSID;
  ***REMOVED***

  get name() {
    return this.data.name;
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
***REMOVED***

module.exports = City;
