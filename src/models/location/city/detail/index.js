const LocalityDetail = require('./../../LocalityDetail.js');

class LocationCityDetail extends LocalityDetail {
  get state() {
    return this.data.state;
  }

  get county() {
    return this.data.county;
  }

  get zcta() {
    return this.data.zcta;
  }

  get neighborhood() {
    return this.data.neighborhood;
  }
}

module.exports = LocationCityDetail;
