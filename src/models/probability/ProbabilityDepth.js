const isArray = require('lodash/isArray');

const FsidResponse = require('../fsidResponse');
const ProbabilityData = require('./ProbabilityData');

class ProbabilityDepth extends FsidResponse {
  _depth;

  constructor(data) {
    super(data);
    if (data && data.depth && isArray(data.depth)) {
      this._depth = data.depth.map((r) => new ProbabilityData(r));
    } else if (data && data.depth === null) {
      this._depth = null;
    }
  }

  get depth() {
    return this._depth;
  }
}

module.exports = ProbabilityDepth;
