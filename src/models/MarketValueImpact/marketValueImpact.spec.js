const MarketValueImpact = require('./index');
const mviProperty = require('../../__mocks__/mviProperty');

let data = null;

describe('MarketValueImpact', () => {
  beforeEach(() => {
    data = new MarketValueImpact(mviProperty);
  });

  it('should initialize', () => {
    expect(data).toMatchSnapshot();
  });

  it('should have loss totals', () => {
    expect(data.lossTotals).toBeDefined();
  });
});
