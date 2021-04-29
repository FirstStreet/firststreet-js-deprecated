const { isArray } = require('lodash');

const FsidResponse = require('../FsidResponse');
const ProbabilityData = require('./ProbabilityData');


class ProbabilityDepth extends FsidResponse {
  #depth=[]

  constructor(data) {
    super(data);
    if (data.depth && isArray(data.depth)) {
      this.#depth = data.depth.map(r => new ProbabilityData(r));
    }
  }

  get depth() {
    return this.#depth;
  }
}

module.exports = ProbabilityDepth;
