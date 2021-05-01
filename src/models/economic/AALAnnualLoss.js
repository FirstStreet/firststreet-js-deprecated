class AALAnnualLoss {
  #data;

  constructor(data) {
    this.#data = data;
  }

  get year() {
    return this.#data.year;
  }

  get data() {
    return this.#data.data;
  }
}

module.exports = AALAnnualLoss;
