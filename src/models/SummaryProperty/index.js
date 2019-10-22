const Response = require('../Response');

/**
 * @typedef {import('../../Api/summary').default} LocationGeometry
*/

/**
 * FirstFloodRisk defines a first risk for a location
 * @typedef {Object} FirstFloodRisk
 * @property {string} floodID
 * @property {number} year
*/

/**
 * @typedef {Object} FloodRisk
 * @property {number} year
 * @property {string} floodID
 */

/**
 * @typedef {Array} FloodRisks
 * @property {FloodRisk} floodRisks
*/

/**
 * A Property
 * @typedef {Object} SummaryProperty
 * @property {number} FSID - The parcel unique identifier
 * @property {string} primaryNumber - The street number
 * @property {string} streetName - The street number
 * @property {string} lastUpdated - date property data last updated
 * @property {string} predirection - an address element placed before the street
 * name that indicates its the geographic location
 * @property {string} postdirection - an address element placed after the street
 * name as a trailing designator such as ST for street or RD for road
 * @property {number} zipCode - The property zip code
 * @property {ParcelCityForProperty} city - The property city
 * @property {string} state - The property state
 * @property {ParcelGeometry} geometry - The viewport and bounding box of a location
 * @property {string} femaZone - FEMA Zone
 * @property {number} elevation - The elevation of a property
 * @property {number} lotSize - The size of the property
 * @property {number} countyFips - The county federal information processing standards code
*/

class SummaryProperty extends Response {
  constructor(data) {
    super(data);
    this.data = data;
    this.location = this.results.location;
  }

  get FSID() {
    return this.location.FSID;
  }

  get primaryNumber() {
    return this.location.primaryNumber;
  }

  get lastUpdated() {
    return this.location.lastUpdated;
  }

  get streetName() {
    return this.location.streetName;
  }

  get zipCode() {
    return this.location.zipCode;
  }

  get city() {
    // this field is a relationship to a city parcel
    return this.location.city.Name;
  }

  get cityID() {
    return this.location.city.ID;
  }

  get state() {
    return this.location.state;
  }

  get geometry() {
    return this.location.geometry;
  }

  get polygon() {
    // todo: parse nested coordinates arrays
    return this.location.geometry.polygon.coordinates;
  }

  get polygonGeoJSON() {
    return this.location.geometry.polygon;
  }

  get center() {
    return this.location.geometry.center.coordinates;
  }

  get centerGeoJSON() {
    return this.location.geometry.center;
  }

  get bounds() {
    // todo: parse nested coordinates arrays
    return this.location.geometry.bounds.coordinates;
  }

  get boundsGeoJSON() {
    return this.location.geometry.bounds;
  }

  get elevation() {
    return this.location.elevation;
  }

  get femaZone() {
    return this.location.femaZone;
  }

  get lotSize() {
    return this.location.lotSize;
  }

  get countyFips() {
    return this.location.countyFips;
  }

  get firstFloodRisk() {
    return this.results.firstFloodRisk;
  }

  get floodRisks() {
    return this.results.floodRisks;
  }
}

module.exports = SummaryProperty;
