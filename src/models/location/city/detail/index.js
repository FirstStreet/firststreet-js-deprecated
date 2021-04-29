const LocalityDetail = require('./../../LocalityDetail.js');

class LocationCityDetail extends LocalityDetail {
  get state() {
    return this._data.state;
  }

  get county() {
    return this._data.county;
  }

  get zcta() {
    return this._data.zcta;
  }

  get neighborhood() {
    return this._data.neighborhood;
  }
}

module.exports = LocationCityDetail;
