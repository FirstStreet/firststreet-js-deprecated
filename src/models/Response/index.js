// readonly

/**
 * Response Model
 * @typedef {Object} Response
 * @property {number} FSID - The location unique identifier
 * @property {Object} results - Results of the query
*/
class Response {
  constructor(data) {
    this.response = data;
    this.currentData = this.response.results;
  }

  get FSID() {
    return this.response.FSID;
  }

  // results is an object of data that is associated with the data call
  get results() {
    return this.response.results;
  }

  // raw is the literal response
  get raw() {
    return this.response;
  }

  get data() {
    return this.currentData;
  }

  getDataByYear(year) {
    const filteredData = this.currentData.map((data) => {
      const filter = data.floodData.filter((floodData) => {
        if (floodData.year === year) {
          return data;
        }
        return null;
      });

      return {
        ...data,
        floodData: filter,
      };
    });

    if (!filteredData) {
      return null;
    }

    this.currentData = filteredData;
    return this;
  }

  getDataByFloodID(floodID) {
    const filteredData = this.currentData.filter(data => data.floodID === floodID);

    if (!filteredData) {
      return null;
    }

    this.currentData = filteredData;
    return this;
  }
}

module.exports = Response;
