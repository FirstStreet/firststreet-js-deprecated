const FsidResponse = require('../FsidResponse');

class AdaptationSummary extends FsidResponse {
  get properties() {
    if (this._data) {
      return this._data.properties;
    }
    return undefined;
  }

  get adaptation() {
    if (this._data) {
      return this._data.adaptation;
    }
    return undefined;
  }
}
module.exports = AdaptationSummary;
