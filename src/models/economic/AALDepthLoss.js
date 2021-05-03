class AALDepthLoss {
  _data;

  constructor(data) {
    this._data = data;
  }

  get depth() {
    return this._data.depth;
  }

  get data() {
    return this._data.data;
  }
}

module.exports = AALDepthLoss;
