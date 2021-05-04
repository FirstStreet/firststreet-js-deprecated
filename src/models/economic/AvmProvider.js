const ApiResponse = require('../ApiResponse');

class AvmProvider extends ApiResponse {
  get providerId() {
    return this._data.providerID;
  }

  get providerName() {
    return this._data.providerName;
  }

  get providerLogo() {
    return this._data.providerLogo;
  }
}
module.exports = AvmProvider;
