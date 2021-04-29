class ResponseSummary {
  #data

  constructor(data) {
    this.#data = data;
  }

  get FSID() {
    return this.#data.fsid;
  }

  get fsid() {
    return this.#data.fsid;
  }

  // raw is the literal response
  get raw() {
    return this.#data;
  }
}

module.exports = ResponseSummary;
