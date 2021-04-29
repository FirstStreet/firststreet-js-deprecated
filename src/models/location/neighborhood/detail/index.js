const LocalityDetail = require('../../LocalityDetail.js');

class LocationNeighborhoodDetail extends LocalityDetail {
  get subtype() {
    return this._data.subtype;
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
}

module.exports = LocationNeighborhoodDetail;
