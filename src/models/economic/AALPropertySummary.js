const { isArray } = require('lodash');
const ApiResponse = require('../ApiResponse');
const AALDepthLoss = require('./AALDepthLoss');
const AALAnnualLoss = require('./AALAnnualLoss');

class AALPropertySummary extends ApiResponse {
  #depthLoss;

  #annualLoss;

  constructor(data) {
    super(data);
    if (data.depthLoss && isArray(data.depthLoss)) {
      this.#depthLoss = data.depthLoss.map(r => new AALDepthLoss(r));
    }
    if (data.annualLoss && isArray(data.annualLoss)) {
      this.#annualLoss = data.annualLoss.map(r => new AALAnnualLoss(r));
    }
  }

  get depthLoss() {
    return this.#depthLoss;
  }

  get annualLoss() {
    return this.#annualLoss;
  }
}

module.exports = AALPropertySummary;
