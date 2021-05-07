const isArray = require('lodash/isArray');

const FsidResponse = require('../fsidResponse');
const ProbabilityData = require('./ProbabilityData');

class ProbabilityCumulative extends FsidResponse {
  _cumulative;

  constructor(data) {
    super(data);
    if (data && data.cumulative && isArray(data.cumulative)) {
      this._cumulative = data.cumulative.map((r) => new ProbabilityData(r));
    } else if (data && data.cumulative === null) {
      this._cumulative = null;
    }
  }

  get cumulative() {
    return this._cumulative;
  }
}

module.exports = ProbabilityCumulative;
