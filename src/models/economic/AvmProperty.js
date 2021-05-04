const FsidResponse = require('../FsidResponse');
const Avm = require('./Avm');

class AvmProperty extends FsidResponse {
  _avm;

  constructor(data) {
    super(data);
    if (data.avm) {
      this._avm = new Avm(data.avm);
    }
  }

  get avm() {
    return this._avm;
  }

  get providerId() {
    return this._data.ProviderID;
  }
}

module.exports = AvmProperty;
