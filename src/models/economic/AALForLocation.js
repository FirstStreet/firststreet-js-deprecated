class AALForLocation {
  #data;

  constructor(data) {
    this.#data = data;
  }

  get year() {
    return this.#data.year;
  }

  get totalLoss() {
    return this.#data.totalLoss;
  }

  get count() {
    return this.#data.count;
  }

  get floodFactor() {
    return this.#data.floodFactor;
  }
}

module.exports = AALForLocation;
