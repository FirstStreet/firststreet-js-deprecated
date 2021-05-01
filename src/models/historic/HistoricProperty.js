class HistoricProperty {
  #data;

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

  get depth() {
    return this.#data.depth;
  }
}

module.exports = HistoricProperty;
