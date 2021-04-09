const ResponseSummary = require('../ResponseSummary');

class DetailLocality extends ResponseSummary {
  constructor(data) {
    super(data);
    this.data = data;
  }

  get FSID() {
    return this.data.fsid;
  }

  get name() {
    return this.data.name;
  }

  get geometry() {
    return this.data.geometry;
  }
}

module.exports = DetailLocality;
