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
    this.currentData = this.data.results;
  }

  get FSID() {
    return this.data.FSID;
  }

  // results is an object of data that is associated with the data call
  get results() {
    return this.data.results;
  }

  // raw is the literal response
  get raw() {
    return this.data;
  }

  get val() {
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

  getData(key, floodID, year) {
    const matchingFloodIdData = this.results.find(results => results.floodID === floodID);

    if (!matchingFloodIdData) {
      return null;
    }

    const correctYearData = matchingFloodIdData.floodData.find((data) => {
      if (data.year === year) {
        return data;
      }
      return null;
    });

    if (!correctYearData) {
      return null;
    }
    const results = correctYearData.data.find((item) => {
      if (item.type === key) {
        return item;
      }
      return null;
    });

    return results;
  }
}

module.exports = Response;
