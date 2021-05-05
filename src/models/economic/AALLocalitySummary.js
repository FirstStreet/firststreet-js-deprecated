const isArray = require('lodash/isArray');
const ApiResponse = require('../ApiResponse');
const AalForLocation = require('./AalForLocation');

class AalLocalitySummary extends ApiResponse {
  _annualLoss;

  constructor(data) {
    super(data);
    if (data.annualLoss && isArray(data.annualLoss)) {
      this._annualLoss = data.annualLoss.map((r) => new AalForLocation(r));
    }
  }

  get annualLoss() {
    return this._annualLoss;
  }
}

module.exports = AalLocalitySummary;
