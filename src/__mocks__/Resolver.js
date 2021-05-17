class Resolver {
  mockFn;

  constructor(cannedResponses) {
    this.mockFn = jest.fn();
    if (cannedResponses) {
      cannedResponses.map((r) => this.mockFn.mockReturnValueOnce(r));
    }
    this.mockServiceResponse = this.mockFn;
  }

  getServiceResponse(mapping, params, locationType, lookupType) {
    return this.mockServiceResponse(mapping, params, locationType, lookupType);
  }
}
module.exports = Resolver;
