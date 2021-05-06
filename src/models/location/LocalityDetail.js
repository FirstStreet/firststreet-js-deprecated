const FsidResponse = require('../fsidResponse');

class LocalityDetail extends FsidResponse {
  get name() {
    if (this._data) {
      return this._data.name;
    }
    return undefined;
  }

  get geometry() {
    if (this._data) {
      return this._data.geometry;
    }
    return undefined;
  }
}

module.exports = LocalityDetail;
