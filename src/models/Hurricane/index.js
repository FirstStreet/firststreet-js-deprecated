const Response = require('../Response');

class Hurricane extends Response {
  constructor(data) {
    super(data);
    this.data = data;
  }

  maxDepth(floodID, year) {
    return this.getData('maxdepth', floodID, year);
  }

  lot(floodID, year) {
    return this.getData('lot', floodID, year);
  }

  neighborhood(floodID, year) {
    return this.getData('neighborhood', floodID, year);
  }

  road(floodID, year) {
    return this.getData('road', floodID, year);
  }
}

module.exports = Hurricane;
