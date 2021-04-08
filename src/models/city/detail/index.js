const DetailLocality = require('../../DetailLocality');

class DetailCity extends DetailLocality {
  constructor(data) {
    super(data);
    this.data = data;
  }

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

  get geometry() {
    return this.data.geometry;
  }
}

module.exports = DetailCity;
