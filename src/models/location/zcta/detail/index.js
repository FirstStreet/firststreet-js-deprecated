const LocalityDetail = require('../../LocalityDetail.js');

class LocationZctaDetail extends LocalityDetail {
  get city() {
    return this.data.city;
  }

  get state() {
    return this.data.state;
  }

  get county() {
    return this.data.county;
  }
}

module.exports = LocationZctaDetail;
