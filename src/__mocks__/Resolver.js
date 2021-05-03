class Resolver {
  mockFn;

  constructor(cannedResponses) {
    this.mockFn = jest.fn();
    if (cannedResponses) {
      cannedResponses.map((r) => this.mockFn.mockReturnValueOnce(r));
    }
    this.mockServiceResponse = this.mockFn;
  }

  getServiceResponse(mapping, params, locationType) {
    return this.mockServiceResponse(mapping, params, locationType);
  }
}
module.exports = Resolver;
