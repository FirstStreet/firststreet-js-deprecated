class AalDepthLoss {
  _aalData;

  constructor(data) {
    this._aalData = data;
  }

  get depth() {
    if (this._aalData) {
      return this._aalData.depth;
    }
    return undefined;
  }

  get data() {
    if (this._aalData) {
      return this._aalData.data;
    }
    return undefined;
  }
}

module.exports = AalDepthLoss;
