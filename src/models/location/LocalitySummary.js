const ResponseSummary = require('../ResponseSummary');

class LocalitySummary extends ResponseSummary {
  get riskDirection() {
    return this.data.riskDirection;
  }

  get environmentalRisk() {
    return this.data.environmentalRisk;
  }

  get propertiesTotal() {
    return this.data.properties.total;
  }

  get propertiesAtRisk() {
    return this.data.properties.atRisk;
  }

  get historic() {
    return this.data.historic;
  }

  get adaptation() {
    return this.data.adaptation;
  }
}

module.exports = LocalitySummary;
