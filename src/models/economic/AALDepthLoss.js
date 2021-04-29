class AALDepthLoss {
  #data

  constructor(data) {
    this.#data = data;
  }

  get depth() {
    return this.#data.depth;
  }

  get data() {
    return this.#data.data;
  }
}

module.exports = AALDepthLoss;
