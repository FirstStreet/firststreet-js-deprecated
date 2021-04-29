
class HistoricEventProperties {
  #data

  constructor(data) {
    this.#data = data;
  }

  get total() {
    return this.#data.total;
  }

  get affected() {
    return this.#data.affected;
  }
}
module.exports = HistoricEventProperties;
