const { isArray } = require('lodash');
const ApiResponse = require('../ApiResponse');
const AALForLocation = require('./AALForLocation');

class AALLocalitySummary extends ApiResponse {
  _annualLoss;

  constructor(data) {
    super(data);
    if (data.annualLoss && isArray(data.annualLoss)) {
      this._annualLoss = data.annualLoss.map((r) => new AALForLocation(r));
    }
  }

  get annualLoss() {
    return this._annualLoss;
  }
}

module.exports = AALLocalitySummary;
