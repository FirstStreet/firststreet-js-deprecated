const ResponseSummary = require('../ResponseSummary');

class LocalityDetail extends ResponseSummary {
  get name() {
    return this.data.name;
  }

  get geometry() {
    return this.data.geometry;
  }
}

module.exports = LocalityDetail;
