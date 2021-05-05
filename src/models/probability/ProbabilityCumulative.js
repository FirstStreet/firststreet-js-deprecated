const { isArray } = require('lodash');

const FsidResponse = require('../FsidResponse');
const ProbabilityData = require('./ProbabilityData');

class ProbabilityCumulative extends FsidResponse {
  _cumulative=[];

  constructor(data) {
    super(data);
    if (data && data.cumulative && isArray(data.cumulative)) {
      this._cumulative = data.cumulative.map((r) => new ProbabilityData(r));
    }
  }

  get cumulative() {
    return this._cumulative;
  }
}

module.exports = ProbabilityCumulative;
