const Http = require('../mockedAPI/Http');
const Api = require('../Api/api');

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
