class ProbabilityData {
  _probabilityData;

  constructor(data) {
    this._probabilityData = data;
  }

  get year() {
    return this._probabilityData.year;
  }

  get data() {
    return this._probabilityData.data;
  }
}

module.exports = ProbabilityData;
