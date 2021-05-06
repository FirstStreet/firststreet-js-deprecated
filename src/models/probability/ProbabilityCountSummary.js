const FsidResponse = require('../FsidResponse');

class ProbabilityCountSummary extends FsidResponse {
  get state() {
    if (this._data) {
      return this._data.state;
    }
    return undefined;
  }

  get city() {
    if (this._data) {
      return this._data.city;
    }
    return undefined;
  }

  get county() {
    if (this._data) {
      return this._data.county;
    }
    return undefined;
  }

  get zcta() {
    if (this._data) {
      return this._data.zcta;
    }
    return undefined;
  }

  get cd() {
    if (this._data) {
      return this._data.cd;
    }
    return undefined;
  }

  get neighborhood() {
    if (this._data) {
      return this._data.neighborhood;
    }
    return undefined;
  }

  get tract() {
    if (this._data) {
      return this._data.tract;
    }
    return undefined;
  }
}
module.exports = ProbabilityCountSummary;
