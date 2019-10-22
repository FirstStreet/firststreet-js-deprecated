const Response = require('../Response');

/**
 * @typedef {import('../../Api/parcel').default} LocationGeometry
 */

/**
 * A city property
 * @typedef {Object} CityProperty
 * @property {number} FSID - The city unique identifier
 * @property {string} name - The city name
 * @property {string} state - The city state
 * @property {LocationGeometry} geometry - The viewport and bounding box of a location
 */

class City extends Response {
  constructor(data) {
    super(data);
    this.data = data;
  }

  get FSID() {
    return this.data.FSID;
  }

  get name() {
    return this.data.name;
  }

  get state() {
    return this.data.state;
  }

  get polygon() {
    // todo: parse nested coordinates arrays
    return this.data.geometry.polygon.coordinates;
  }

  get polygonGeoJSON() {
    return this.data.geometry.polygon;
  }

  get center() {
    return this.data.geometry.center.coordinates;
  }

  get centerGeoJSON() {
    return this.data.geometry.center;
  }

  get bounds() {
    // todo: parse nested coordinates arrays
    return this.data.geometry.bounds.coordinates;
  }

  get boundsGeoJSON() {
    return this.data.geometry.bounds;
  }
}

module.exports = City;
