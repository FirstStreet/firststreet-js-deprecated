const DetailLocality = require('../../DetailLocality');

class DetailDistrict extends DetailLocality {
  constructor(data) {
    super(data);
    this.data = data;
  }

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

module.exports = DetailDistrict;
