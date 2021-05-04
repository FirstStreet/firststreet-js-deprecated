const { isArray } = require('lodash');
const ApiResponse = require('../ApiResponse');
const AALDepthLoss = require('./AALDepthLoss');
const AALAnnualLoss = require('./AALAnnualLoss');

class AALPropertySummary extends ApiResponse {
  _depthLoss;

  _annualLoss;

  constructor(data) {
    super(data);
    if (data.depthLoss && isArray(data.depthLoss)) {
      this._depthLoss = data.depthLoss.map((r) => new AALDepthLoss(r));
    }
    if (data.annualLoss && isArray(data.annualLoss)) {
      this._annualLoss = data.annualLoss.map((r) => new AALAnnualLoss(r));
    }
  }

  get depthLoss() {
    return this._depthLoss;
  }

  get annualLoss() {
    return this._annualLoss;
  }
}

module.exports = AALPropertySummary;
