class AALDepthLoss {
  _aalData;

  constructor(data) {
    this._aalData = data;
  }

  get depth() {
    return this._aalData.depth;
  }

  get data() {
    return this._aalData.data;
  }
}

module.exports = AALDepthLoss;
