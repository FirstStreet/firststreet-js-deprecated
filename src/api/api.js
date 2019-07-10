const pkg = require('../../package.json');
const parcel = require('./parcel/index.js');

/**
 * api wrapper
 * @constructor
 * @param {Object} http - Http request module
*/
class Api {
  constructor(http) {
    this.http = http;
  }

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
              clientVersion: pkg.version,
            });
          }
          return resolve(body);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  bindTo(context) {
    const ctx = context;

    ctx.status = this.status.bind(this, context);
    ctx.parcel = parcel(this.http);
  }
}

module.exports = Api;
