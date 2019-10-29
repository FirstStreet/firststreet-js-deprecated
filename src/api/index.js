const dataSummary = require('./summary');

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

    ctx.dataSummary = dataSummary(this.http);
  ***REMOVED***
***REMOVED***

module.exports = Api;
