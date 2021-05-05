const LocalityDetail = require('../../LocalityDetail.js');

class LocationCityDetail extends LocalityDetail {
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

  get zcta() {
    if (this._data) {
      return this._data.zcta;
    }
    return undefined;
  }

  get neighborhood() {
    if (this._data) {
      return this._data.neighborhood;
    }
    return undefined;
  }
}

module.exports = LocationCityDetail;
