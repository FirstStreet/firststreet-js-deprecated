const { isArray } = require('lodash');

const FsidResponse = require('../FsidResponse');
const ProbabilityData = require('./ProbabilityData');

class ProbabilityChance extends FsidResponse {
  _chance=[];

  constructor(data) {
    super(data);
    if (data && data.chance && isArray(data.chance)) {
      this._chance = data.chance.map((r) => new ProbabilityData(r));
    }
  }

  get chance() {
    return this._chance;
  }
}

module.exports = ProbabilityChance;
