const LocalityDetail = require('../../LocalityDetail.js');

class LocationTractDetail extends LocalityDetail {
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

module.exports = LocationTractDetail;
