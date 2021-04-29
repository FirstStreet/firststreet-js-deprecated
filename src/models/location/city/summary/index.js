const ResponseSummary = require('../../../ResponseSummary');

class LocationCitySummary extends ResponseSummary {
  get name() {
    return this.data.name;
  }

  get state() {
    return this.data.state;
  }

  get polygon() {
    return this.data.geometry.polygon.coordinates;
  }

  get polygonGeoJSON() {
    return this.data.geometry.polygon;
  }

  get center() {
    return this.data.geometry.center.coordinates;
  }

  get bounds() {
    return this.data.geometry.bbox.coordinates;
  }
}

module.exports = LocationCitySummary;
