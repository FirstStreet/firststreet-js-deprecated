const LocalityDetail = require('../../LocalityDetail.js');

class LocationDistrictDetail extends LocalityDetail {
  get district() {
    return this._data.district;
  }

  get congress() {
    return this._data.congress;
  }

  get state() {
    return this._data.state;
  }

  get county() {
    return this._data.county;
  }
}

module.exports = LocationDistrictDetail;
