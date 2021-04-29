const LocalityDetail = require('../../LocalityDetail.js');

class LocationZctaDetail extends LocalityDetail {
  get city() {
    return this._data.city;
  }

  get state() {
    return this._data.state;
  }

  get county() {
    return this._data.county;
  }
}

module.exports = LocationZctaDetail;
