const ApiResponse = require('../ApiResponse');

class FsidResponse extends ApiResponse {
  get fsid() {
    return this._data.fsid;
  }
}

module.exports = FsidResponse;
