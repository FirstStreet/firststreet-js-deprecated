const LocalityDetail = require('../../LocalityDetail.js');

class LocationDistrictDetail extends LocalityDetail {
  get district() {
    return this.data.district;
  }

  get congress() {
    return this.data.congress;
  }

  get state() {
    return this.data.state;
  }

  get county() {
    return this.data.county;
  }
}

module.exports = LocationDistrictDetail;
