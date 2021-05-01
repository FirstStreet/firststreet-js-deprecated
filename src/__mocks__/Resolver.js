class Resolver {
  constructor(cannedResponses) {
    const mockFn = jest.fn();
    if (cannedResponses) {
      cannedResponses.map(r => mockFn.mockReturnValueOnce(r));
    }
    this.mockServiceResponse = mockFn;
  }

  getServiceResponse() {
    return this.mockServiceResponse();
  }
}
module.exports = Resolver;
