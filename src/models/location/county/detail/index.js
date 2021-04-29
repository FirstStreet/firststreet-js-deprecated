const LocalityDetail = require('../../LocalityDetail.js');

class LocationCountyDetail extends LocalityDetail {
  get fips() {
    return this._data.fips;
  }

  get isCoastal() {
    return this._data.isCoastal;
  }

  get state() {
    return this._data.state;
  }

  get city() {
    return this._data.city;
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
}

module.exports = LocationCountyDetail;
