const FsidResponse = require('../../../FsidResponse');

class LocationCitySummary extends FsidResponse {
  get name() {
    return this._data.name;
  }

  get state() {
    return this._data.state;
  }

  get polygon() {
    return this._data.geometry.polygon.coordinates;
  }

  get polygonGeoJSON() {
    return this._data.geometry.polygon;
  }

  get center() {
    return this._data.geometry.center.coordinates;
  }

  get bounds() {
    return this._data.geometry.bbox.coordinates;
  }
}

module.exports = LocationCitySummary;
