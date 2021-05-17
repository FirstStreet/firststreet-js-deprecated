const LocalityDetail = require('../../LocalityDetail.js');

class LocationCountyDetail extends LocalityDetail {
  get fips() {
    if (this._data) {
      return this._data.fips;
    }
    return undefined;
  }

  get isCoastal() {
    if (this._data) {
      return this._data.isCoastal;
    }
    return undefined;
  }

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
}

module.exports = LocationCountyDetail;
