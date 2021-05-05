const FsidResponse = require('../FsidResponse');

class LocalitySummary extends FsidResponse {
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

  get propertiesTotal() {
    if (this._data && this._data.properties) {
      return this._data.properties.total;
    }
    return undefined;
  }

  get propertiesAtRisk() {
    if (this._data && this._data.properties) {
      return this._data.properties.atRisk;
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

module.exports = LocalitySummary;
