const { isArray } = require('lodash');

const FsidResponse = require('../FsidResponse');
const ProbabilityData = require('./ProbabilityData');

class ProbabilityDepth extends FsidResponse {
  _depth=[];

  constructor(data) {
    super(data);
    if (data.depth && isArray(data.depth)) {
      this._depth = data.depth.map((r) => new ProbabilityData(r));
    }
  }

  get depth() {
    return this._depth;
  }
}

module.exports = ProbabilityDepth;
