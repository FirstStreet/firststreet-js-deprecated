const { isArray } = require('lodash');

const FsidResponse = require('../FsidResponse');
const ProbabilityData = require('./ProbabilityData');


class ProbabilityCount extends FsidResponse {
  _count=[];

  constructor(data) {
    super(data);
    if (data.count && isArray(data.count)) {
      this._count = data.count.map(r => new ProbabilityData(r));
    }
  }

  get count() {
    return this._count;
  }
}

module.exports = ProbabilityCount;
