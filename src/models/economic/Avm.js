class Avm {
  _avmRecord;

  constructor(data) {
    this._avmRecord = data;
  }

  get low() {
    if (this._avmRecord) {
      return this._avmRecord.low;
    }
    return undefined;
  }

  get mid() {
    if (this._avmRecord) {
      return this._avmRecord.mid;
    }
    return undefined;
  }

  get high() {
    if (this._avmRecord) {
      return this._avmRecord.high;
    }
    return undefined;
  }
}
module.exports = Avm;
