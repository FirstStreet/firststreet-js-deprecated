const DetailLocality = require('../../DetailLocality');

class DetailZcta extends DetailLocality {
  constructor(data) {
    super(data);
    this.data = data;
  }

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

module.exports = DetailZcta;
