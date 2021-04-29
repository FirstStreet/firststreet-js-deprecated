const FsidResponse = require('../../../FsidResponse');


class LocationPropertySummary extends FsidResponse {
  get floodFactor() {
    return this._data.floodFactor;
  }

  get riskDirection() {
    return this._data.riskDirection;
  }

  get environmentalRisk() {
    return this._data.environmentalRisk;
  }

  get historic() {
    return this._data.historic;
  }

  get adaptation() {
    return this._data.adaptation;
  }
}

module.exports = LocationPropertySummary;
