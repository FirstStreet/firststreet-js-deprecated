const FsidResponse = require('../fsidResponse');

class FemaNfip extends FsidResponse {
  get claimCount() {
    if (this._data) {
      return this._data.claimCount;
    }
    return undefined;
  }

  get policyCount() {
    if (this._data) {
      return this._data.policyCount;
    }
    return undefined;
  }

  get buildingPaid() {
    if (this._data) {
      return this._data.buildingPaid;
    }
    return undefined;
  }

  get contentPaid() {
    if (this._data) {
      return this._data.contentPaid;
    }
    return undefined;
  }

  get buildingCoverage() {
    if (this._data) {
      return this._data.buildingCoverage;
    }
    return undefined;
  }

  get contentCoverage() {
    if (this._data) {
      return this._data.contentCoverage;
    }
    return undefined;
  }

  get iccPaid() {
    if (this._data) {
      return this._data.iccPaid;
    }
    return undefined;
  }
}

module.exports = FemaNfip;
