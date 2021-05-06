const FsidResponse = require('../fsidResponse');

class Precipitation extends FsidResponse {
  get projected() {
    if (this._data) {
      return this._data.projected;
    }
    return undefined;
  }
}

module.exports = Precipitation;
