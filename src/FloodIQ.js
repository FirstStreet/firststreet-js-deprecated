const Api = require('./Api/api');
const Http = require('./Http');

/**
 * Create a FloodIQ class
 * @constructor
 * @param {string***REMOVED*** apiKey - A string with the base URL for account.
 * @param {Object***REMOVED*** options - A configuration object.
*/
class FloodIQ {
  constructor(apiKey = null, options = {***REMOVED***) {
    if (!apiKey) {
      throw new Error('Missing API Key.');
    ***REMOVED***

    const api = new Api(new Http(apiKey, options));
    api.bindTo(this);
  ***REMOVED***
***REMOVED***

module.exports = FloodIQ;
