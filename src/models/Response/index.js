// readonly

/**
 * Response Model
 * @typedef {Object} Response
 * @property {number} FSID - The location unique identifier
 * @property {string} type - The location type
 * @property {Object} results - Results of the query
*/
class Response {
  constructor(data) {
    this.data = data;
  }

  get FSID() {
    return this.data.FSID;
  }

  // type is the location type
  get type() {
    return this.data.type;
  }

  // results is an object of data that is associated with the data call
  get results() {
    return this.data.results;
  }

  // raw is the literal response
  get raw() {
    return this.data;
  }
}

module.exports = Response;
