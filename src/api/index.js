const dataSummary = require('./summary');
const hurricane = require('./hurricane');
const tidal = require('./tidal');
const mvi = require('./marketValueImpact');

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
    ctx.hurricane = hurricane(this.http);
    ctx.tidal = tidal(this.http);
    ctx.mvi = mvi(this.http);
  }
}

module.exports = Api;
