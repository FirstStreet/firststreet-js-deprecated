const { isArray } = require('lodash');
const ApiResponse = require('../ApiResponse');
const AalDepthLoss = require('./AalDepthLoss');
const AalAnnualLoss = require('./AalAnnualLoss');

class AalPropertySummary extends ApiResponse {
  _depthLoss;

  _annualLoss;

  constructor(data) {
    super(data);
    if (data && data.depthLoss && isArray(data.depthLoss)) {
      this._depthLoss = data.depthLoss.map((r) => new AalDepthLoss(r));
    }
    if (data && data.annualLoss && isArray(data.annualLoss)) {
      this._annualLoss = data.annualLoss.map((r) => new AalAnnualLoss(r));
    }
  }

  get depthLoss() {
    return this._depthLoss;
  }

  get annualLoss() {
    return this._annualLoss;
  }
}

module.exports = AalPropertySummary;
