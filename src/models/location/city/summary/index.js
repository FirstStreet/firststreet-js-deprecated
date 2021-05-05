const FsidResponse = require('../../../FsidResponse');

class LocationCitySummary extends FsidResponse {
  get name() {
    if (this._data) {
      return this._data.name;
    }
    return undefined;
  }

  get state() {
    if (this._data) {
      return this._data.state;
    }
    return undefined;
  }

  get polygon() {
    if (this._data && this._data.geometry && this._data.geometry.polygon) {
      return this._data.geometry.polygon.coordinates;
    }
    return undefined;
  }

  get polygonGeoJSON() {
    if (this._data && this._data.geometry && this._data.geometry.polygon) {
      return this._data.geometry.polygon;
    }
    return undefined;
  }

  get center() {
    if (this._data && this._data.geometry && this._data.geometry.polygon) {
      return this._data.geometry.center.coordinates;
    }
    return undefined;
  }

  get bounds() {
    if (this._data && this._data.geometry && this._data.geometry.polygon) {
      return this._data.geometry.bbox.coordinates;
    }
    return undefined;
  }
}

module.exports = LocationCitySummary;
