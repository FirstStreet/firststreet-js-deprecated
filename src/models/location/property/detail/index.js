const FsidResponse = require('../../../FsidResponse');

class LocationPropertyDetail extends FsidResponse {
  get streetNumber() {
    return this._data.streetNumber;
  }

  get route() {
    return this._data.route;
  }

  get elevation() {
    return this._data.elevation;
  }

  get footprintId() {
    return this._data.footprintId;
  }

  get city() {
    return this._data.city;
  }

  get state() {
    return this._data.state;
  }

  get county() {
    return this._data.county;
  }

  get cd() {
    return this._data.cd;
  }

  get zcta() {
    return this._data.zcta;
  }

  get tract() {
    return this._data.tract;
  }

  get neighborhood() {
    return this._data.neighborhood;
  }

  get fema() {
    return this._data.fema;
  }

  get geometry() {
    return this._data.geometry;
  }

  get floorElevation() {
    return this._data.floorElevation;
  }

  get building() {
    return this._data.building;
  }

  get residential() {
    return this._data.residential;
  }

  get floodType() {
    return this._data.floodType;
  }
}

module.exports = LocationPropertyDetail;
