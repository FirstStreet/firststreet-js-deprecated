const FsidResponse = require('../FsidResponse');

class LocalitySummary extends FsidResponse {
  get riskDirection() {
    return this._data.riskDirection;
  }

  get environmentalRisk() {
    return this._data.environmentalRisk;
  }

  get propertiesTotal() {
    return this._data.properties.total;
  }

  get propertiesAtRisk() {
    return this._data.properties.atRisk;
  }

  get historic() {
    return this._data.historic;
  }

  get adaptation() {
    return this._data.adaptation;
  }
}

module.exports = LocalitySummary;
