const LocalityDetail = require('../../LocalityDetail.js');

class LocationNeighborhoodDetail extends LocalityDetail {
  get subtype() {
    if (this._data) {
      return this._data.subtype;
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
}

module.exports = LocationNeighborhoodDetail;
