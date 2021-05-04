class Avm {
  _avmRecord;

  constructor(data) {
    this._avmRecord = data;
  }

  get low() {
    return this._avmRecord.low;
  }

  get mid() {
    return this._avmRecord.mid;
  }

  get high() {
    return this._avmRecord.high;
  }
}
module.exports = Avm;
