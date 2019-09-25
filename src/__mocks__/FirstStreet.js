const Http = require('./Http');
const Api = require('../api');

class FirstStreet {
  constructor(apiKey = null, options = {***REMOVED***) {
    if (!apiKey) {
      throw new Error('Missing API Key.');
    ***REMOVED***

    const api = new Api(new Http(apiKey, options));
    api.bindTo(this);
  ***REMOVED***
***REMOVED***

module.exports = FirstStreet;
