// readonly

/**
 * Response Model
 * @typedef {Object***REMOVED*** Response
 * @property {number***REMOVED*** FSID - The location unique identifier
 * @property {string***REMOVED*** type - The location type
 * @property {Object***REMOVED*** results - Results of the query
*/
class Response {
  constructor(data) {
    this.data = data;
  ***REMOVED***

  get FSID() {
    return this.data.FSID;
  ***REMOVED***

  // type is the location type
  get type() {
    return this.data.type;
  ***REMOVED***

  // results is an object of data that is associated with the data call
  get results() {
    return this.data.results;
  ***REMOVED***

  // raw is the literal response
  get raw() {
    return this.data;
  ***REMOVED***
***REMOVED***

module.exports = Response;
