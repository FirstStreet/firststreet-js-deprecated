// readonly

/**
 * Response Model
 * @typedef {Object} Response
 * @property {number} FSID - The location unique identifier
 * @property {Object} results - Results of the query
*/
class Response {
  constructor(data) {
    this.data = data;
  }

  get FSID() {
    return this.data.FSID;
  }

  // raw is the literal response
  get raw() {
    return this.data;
  }
}

module.exports = Response;
