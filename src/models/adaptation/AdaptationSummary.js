const FsidResponse = require('../FsidResponse');

class AdaptationSummary extends FsidResponse {
  get properties() {
    return this._data.properties;
  }

  get adaptation() {
    return this._data.adaptation;
  }
}
module.exports = AdaptationSummary;
