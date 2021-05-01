class NFIPEstimate {
  #data;

  constructor(data) {
    this.#data = data;
  }

  get estimate() {
    return this.#data.estimate;
  }

  get building() {
    return this.#data.building;
  }

  get contents() {
    return this.#data.contents;
  }
}

module.exports = NFIPEstimate;
