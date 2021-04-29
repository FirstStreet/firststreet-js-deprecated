const LocalityDetail = require('../../LocalityDetail.js');

class LocationNeighborhoodDetail extends LocalityDetail {
  get subtype() {
    return this.data.subtype;
  }

  get state() {
    return this.data.state;
  }

  get city() {
    return this.data.city;
  }

  get county() {
    return this.data.county;
  }
}

module.exports = LocationNeighborhoodDetail;
