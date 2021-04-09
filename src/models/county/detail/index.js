const DetailLocality = require('../../DetailLocality');

class DetailCounty extends DetailLocality {
  constructor(data) {
    super(data);
    this.data = data;
  }

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

module.exports = DetailCounty;
