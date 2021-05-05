const ApiResponse = require('../ApiResponse');

class AvmProvider extends ApiResponse {
  get providerId() {
    return this._data.providerID;
  }

  get providerName() {
    if (this._data) {
      return this._data.providerName;
    }
    return undefined;
  }

  get providerLogo() {
    if (this._data) {
      return this._data.providerLogo;
    }
    return undefined;
  }
}
module.exports = AvmProvider;
