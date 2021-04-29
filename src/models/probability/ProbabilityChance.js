const { isArray } = require('lodash');

const FsidResponse = require('../FsidResponse');
const ProbabilityData = require('./ProbabilityData');


class ProbabilityChance extends FsidResponse {
  #chance=[]

  constructor(data) {
    super(data);
    if (data.chance && isArray(data.chance)) {
      this.#chance = data.chance.map(r => new ProbabilityData(r));
    }
  }

  get chance() {
    return this.#chance;
  }
}

module.exports = ProbabilityChance;
