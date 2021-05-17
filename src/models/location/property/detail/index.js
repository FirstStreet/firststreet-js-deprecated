const FsidResponse = require('../../../fsidResponse');

class LocationPropertyDetail extends FsidResponse {
  get streetNumber() {
    if (this._data) {
      return this._data.streetNumber;
    }
    return undefined;
  }

  get route() {
    if (this._data) {
      return this._data.route;
    }
    return undefined;
  }

  get elevation() {
    if (this._data) {
      return this._data.elevation;
    }
    return undefined;
  }

  get footprintId() {
    if (this._data) {
      return this._data.footprintId;
    }
    return undefined;
  }

  get city() {
    if (this._data) {
      return this._data.city;
    }
    return undefined;
  }

  get state() {
    if (this._data) {
      return this._data.state;
    }
    return undefined;
  }

  get county() {
    if (this._data) {
      return this._data.county;
    }
    return undefined;
  }

  get cd() {
    if (this._data) {
      return this._data.cd;
    }
    return undefined;
  }

  get zcta() {
    if (this._data) {
      return this._data.zcta;
    }
    return undefined;
  }

  get tract() {
    if (this._data) {
      return this._data.tract;
    }
    return undefined;
  }

  get neighborhood() {
    if (this._data) {
      return this._data.neighborhood;
    }
    return undefined;
  }

  get fema() {
    if (this._data) {
      return this._data.fema;
    }
    return undefined;
  }

  get geometry() {
    if (this._data) {
      return this._data.geometry;
    }
    return undefined;
  }

  get floorElevation() {
    if (this._data) {
      return this._data.floorElevation;
    }
    return undefined;
  }

  get building() {
    if (this._data) {
      return this._data.building;
    }
    return undefined;
  }

  get residential() {
    if (this._data) {
      return this._data.residential;
    }
    return undefined;
  }

  get floodType() {
    if (this._data) {
      return this._data.floodType;
    }
    return undefined;
  }
}

module.exports = LocationPropertyDetail;
