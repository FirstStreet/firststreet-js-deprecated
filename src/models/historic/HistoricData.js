class HistoricData {
  #data

  constructor(data) {
    this.#data = data;
  }

  get eventId() {
    return this.#data.eventId;
  }

  get name() {
    return this.#data.name;
  }

  get type() {
    return this.#data.type;
  }

  get data() {
    return this.#data.data;
  }
}

module.exports = HistoricData;
