const parcel = require('./parcel');

/**
 * api wrapper
 * @constructor
 * @param {Object} http - Http request module
*/
class Api {
  constructor(http) {
    this.http = http;
  }

  bindTo(context) {
    const ctx = context;

    ctx.parcel = parcel(this.http);
  }
}

module.exports = Api;
