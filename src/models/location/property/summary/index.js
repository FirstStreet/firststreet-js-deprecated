const FsidResponse = require('../../../FsidResponse');

class LocationPropertySummary extends FsidResponse {
  get floodFactor() {
    if (this._data) {
      return this._data.floodFactor;
    }
    return undefined;
  }

  get riskDirection() {
    if (this._data) {
      return this._data.riskDirection;
    }
    return undefined;
  }

  get environmentalRisk() {
    if (this._data) {
      return this._data.environmentalRisk;
    }
    return undefined;
  }

  get historic() {
    if (this._data) {
      return this._data.historic;
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

module.exports = LocationPropertySummary;
