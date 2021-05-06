class ApiResponse {
  constructor(data) {
    this._data = data;
  }

  get raw() {
    return this._data;
  }
}

module.exports = ApiResponse;
