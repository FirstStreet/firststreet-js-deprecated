const ResponseSummary = require('../ResponseSummary');

// todo: update jsdocs
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
 * The recommended city of which is based on the property's zip code from the United States
 * Postal Service
 * @typedef {Object} USPSCity
 * @property {string} name
 * @property {string} state
 */

/**
 * A Property
 * @typedef {Object} SummaryProperty
 * @property {number} FSID - The parcel unique identifier
 * @property {string} primaryNumber - Address primary number
 * @property {string} streetName - Address street name
 * @property {string} lastUpdated - Last time parcel data was updated in the First Street
 * Foundation * API database
 * @property {string} predirection - Address predirection
 * @property {string} postdirection - Address postdirection
 * @property {number} zipCode - Address zip code
 * @property {Object} city - A City is associated with the requested Property. This
 * property may be `null` if the City has not been modeled in our database. If you require a city
 * name for display purposes, use uspsCity
 * @property {string} state - The property state
 * @property {USPSCity} uspsCity
 * @property {ParcelGeometry} geometry - The viewport and bounding box of a location
 * @property {string} femaZone - FEMA Zone
 * @property {number} elevation - The elevation of a property
 * @property {number} lotSize - The size of the property
 * @property {number} countyFips - The county federal information processing standards code
 */

class SummaryProperty extends ResponseSummary {
  constructor(data) {
    super(data);
    this.data = data;
  }

  get FSID() {
    return this.data.fsid;
  }

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

module.exports = SummaryProperty;
