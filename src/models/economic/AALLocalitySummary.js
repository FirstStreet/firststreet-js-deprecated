const { isArray } = require('lodash');
const ApiResponse = require('../ApiResponse');
const AALForLocation = require('./AALForLocation');

class AALLocalitySummary extends ApiResponse {
  #annualLoss

  constructor(data) {
    super(data);
    if (data.annualLoss && isArray(data.annualLoss)) {
      this.#annualLoss = data.annualLoss.map(r => new AALForLocation(r));
    }
  }

  get annualLoss() {
    return this.#annualLoss;
  }
}

module.exports = AALLocalitySummary;
