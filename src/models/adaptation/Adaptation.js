const ApiResponse = require('../ApiResponse');
const ServingLocations = require('./ServingLocations');

class Adaptation extends ApiResponse {
  _servingLocations;

  constructor(data) {
    super(data);
    if (data && data.serving) {
      this._servingLocations = new ServingLocations(data.serving);
    }
  }

  get serving() {
    return this._servingLocations;
  }
}

module.exports = Adaptation;
