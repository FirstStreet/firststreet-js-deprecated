const LocalityDetail = require('../../LocalityDetail.js');

class LocationDistrictDetail extends LocalityDetail {
  get district() {
    return this._data.district;
  }

  get congress() {
    if (this._data) {
      return this._data.congress;
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
}

module.exports = LocationDistrictDetail;
