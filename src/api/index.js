const parcel = require('./parcel');

/**
 * api wrapper
 * @constructor
 * @param {Object***REMOVED*** http - Http request module
*/
class Api {
  constructor(http) {
    this.http = http;
  ***REMOVED***

  bindTo(context) {
    const ctx = context;

    ctx.parcel = parcel(this.http);
  ***REMOVED***
***REMOVED***

module.exports = Api;
