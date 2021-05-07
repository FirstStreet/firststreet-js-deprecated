const isArray = require('lodash/isArray');

const FsidResponse = require('../fsidResponse');
const ProbabilityData = require('./ProbabilityData');

class ProbabilityCount extends FsidResponse {
  _count;

  constructor(data) {
    super(data);
    if (data && data.count && isArray(data.count)) {
      this._count = data.count.map((r) => new ProbabilityData(r));
    } else if (data && data.count === null) {
      this._count = null;
    }
  }

  get count() {
    return this._count;
  }
}

module.exports = ProbabilityCount;
