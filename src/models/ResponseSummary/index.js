// readonly

/**
 * Response Model
 * @typedef {Object***REMOVED*** Response
 * @property {number***REMOVED*** FSID - The location unique identifier
 * @property {Object***REMOVED*** results - Results of the query
 */
class Response {
  constructor(data) {
    this.data = data;
  ***REMOVED***

  get FSID() {
    return this.data.FSID;
  ***REMOVED***

  // raw is the literal response
  get raw() {
    return this.data;
  ***REMOVED***
***REMOVED***

module.exports = Response;
