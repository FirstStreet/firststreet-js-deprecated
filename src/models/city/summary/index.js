const ResponseSummary = require('../../ResponseSummary');

/**
 * @typedef {import('../../Api/parcel').default} dataGeometry
 */

/**
 * A city property
 * @typedef {Object} CityProperty
 * @property {number} FSID - The city unique identifier
 * @property {string} name - The city name
 * @property {string} state - The city state
 * @property {LocationGeometry} geometry - The viewport and bounding box of a location
 */

class City extends ResponseSummary {
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

module.exports = City;
