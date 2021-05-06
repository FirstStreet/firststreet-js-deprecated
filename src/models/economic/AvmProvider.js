const ApiResponse = require('../ApiResponse');

class AvmProvider extends ApiResponse {
  get providerId() {
    if (this._data) {
      return this._data.providerID;
    }
    return undefined;
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
