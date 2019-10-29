const dataSummary = require('./summary');

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

    ctx.dataSummary = dataSummary(this.http);
  }
}

module.exports = Api;
