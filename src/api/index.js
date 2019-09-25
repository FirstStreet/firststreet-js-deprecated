const summary = require('./summary');

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

    ctx.summary = summary(this.http);
  ***REMOVED***
***REMOVED***

module.exports = Api;
