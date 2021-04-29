const LocalityDetail = require('../../LocalityDetail.js');

class LocationCountyDetail extends LocalityDetail {
  get fips() {
    return this.data.fips;
  }

  get isCoastal() {
    return this.data.isCoastal;
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

  get cd() {
    return this.data.cd;
  }

  get zcta() {
    return this.data.zcta;
  }
}

module.exports = LocationCountyDetail;
