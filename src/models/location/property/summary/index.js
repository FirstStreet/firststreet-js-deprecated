const ResponseSummary = require('../../../ResponseSummary');


class LocationPropertySummary extends ResponseSummary {
  get floodFactor() {
    return this.data.floodFactor;
  }

  get riskDirection() {
    return this.data.riskDirection;
  }

  get environmentalRisk() {
    return this.data.environmentalRisk;
  }

  get historic() {
    return this.data.historic;
  }

  get adaptation() {
    return this.data.adaptation;
  }
}

module.exports = LocationPropertySummary;
