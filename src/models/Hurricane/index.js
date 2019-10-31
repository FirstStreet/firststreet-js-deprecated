const Response = require('../Response');

class Hurricane extends Response {
  constructor(data) {
    super(data);
    this.data = data;
  }

  getData(key) {
    const results = this.results.map(item => item.floodData.map(floodData => floodData.data.find((data) => {
      if (data.type === key) {
        return data;
      }
      return null;
    })));

    return results[0];
  }

  get maxDepth() {
    return this.getData('maxdepth');
  }

  get lot() {
    return this.getData('lot');
  }

  get neighborhood() {
    return this.getData('neighborhood');
  }

  get road() {
    return this.getData('road');
  }
}

module.exports = Hurricane;
