const DetailLocality = require('../../DetailLocality');

class DetailTract extends DetailLocality {
  constructor(data) {
    super(data);
    this.data = data;
  }

  get fips() {
    return this.data.fips;
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

module.exports = DetailTract;
