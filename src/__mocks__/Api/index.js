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

  status() {
    return new Promise((resolve, reject) => {
      this.http
        .status()
        .then(res => res.json())
        .then((body) => {
          if (body && body.data) {
            return resolve({
              id: body.data.id,
              releasedAt: body.attributes.releasedAt,
              version: body.data.attributes.version,
              clientVersion: '1.0',
            ***REMOVED***);
          ***REMOVED***
          return resolve(body);
        ***REMOVED***)
        .catch((err) => {
          reject(err);
        ***REMOVED***);
    ***REMOVED***);
  ***REMOVED***

  bindTo(context) {
    const ctx = context;

    ctx.status = this.status.bind(this, context);
    ctx.parcel = parcel(this.http);
  ***REMOVED***
***REMOVED***

module.exports = Api;
