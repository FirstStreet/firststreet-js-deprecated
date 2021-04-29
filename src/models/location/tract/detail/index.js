const LocalityDetail = require('../../LocalityDetail.js');

class LocationTractDetail extends LocalityDetail {
  get state() {
    return this._data.state;
  }

  get city() {
    return this._data.city;
  }

  get county() {
    return this._data.county;
  }
}

module.exports = LocationTractDetail;
