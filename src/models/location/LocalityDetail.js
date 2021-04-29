const FsidResponse = require('../FsidResponse');

class LocalityDetail extends FsidResponse {
  get name() {
    return this._data.name;
  }

  get geometry() {
    return this._data.geometry;
  }
}

module.exports = LocalityDetail;
