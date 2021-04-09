const DetailLocality = require('../../DetailLocality');

class DetailState extends DetailLocality {
  constructor(data) {
    super(data);
    this.data = data;
  }

  get fips() {
    return this.data.fips;
  }
}

module.exports = DetailState;
