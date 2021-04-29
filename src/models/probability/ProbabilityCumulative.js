const { isArray } = require('lodash');

const FsidResponse = require('../FsidResponse');
const ProbabilityData = require('./ProbabilityData');


class ProbabilityCumulative extends FsidResponse {
  #cumulative=[]

  constructor(data) {
    super(data);
    if (data.cumulative && isArray(data.cumulative)) {
      this.#cumulative = data.cumulative.map(r => new ProbabilityData(r));
    }
  }

  get cumulative() {
    return this.#cumulative;
  }
}

module.exports = ProbabilityCumulative;
