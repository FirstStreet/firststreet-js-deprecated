const isArray = require('lodash/isArray');

const FsidResponse = require('../fsidResponse');
const ProbabilityData = require('./ProbabilityData');

class ProbabilityChance extends FsidResponse {
  _chance;

  constructor(data) {
    super(data);
    if (data && data.chance && isArray(data.chance)) {
      this._chance = data.chance.map((r) => new ProbabilityData(r));
    } else if (data && data.chance === null) {
      this._chance = null;
    }
  }

  get chance() {
    return this._chance;
  }
}

module.exports = ProbabilityChance;
