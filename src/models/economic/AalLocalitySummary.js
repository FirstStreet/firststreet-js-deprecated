const isArray = require('lodash/isArray');
const ApiResponse = require('../apiResponse');
const AalForLocation = require('./AalForLocation');

class AalLocalitySummary extends ApiResponse {
  _annualLoss;

  constructor(data) {
    super(data);
    if (data && data.annualLoss && isArray(data.annualLoss)) {
      this._annualLoss = data.annualLoss.map((r) => new AalForLocation(r));
    } else if (data && data.annualLoss === null) {
      this._annualLoss = null;
    }
  }

  get annualLoss() {
    return this._annualLoss;
  }
}

module.exports = AalLocalitySummary;
