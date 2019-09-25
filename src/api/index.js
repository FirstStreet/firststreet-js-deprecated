const summary = require('./summary');

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

    ctx.summary = summary(this.http);
  }
}

module.exports = Api;
