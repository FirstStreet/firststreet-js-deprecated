class ProbabilityData {
  _probabilityData;

  constructor(data) {
    this._probabilityData = data;
  }

  get year() {
    if (this._probabilityData) {
      return this._probabilityData.year;
    }
    return undefined;
  }

  get data() {
    if (this._probabilityData) {
      return this._probabilityData.data;
    }
    return undefined;
  }
}

module.exports = ProbabilityData;
