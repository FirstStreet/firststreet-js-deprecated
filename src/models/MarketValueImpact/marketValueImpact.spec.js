const MarketValueImpact = require('./index');
const mviProperty = require('../../__mocks__/mviProperty');

let data = null;

describe('MarketValueImpact', () => {
  beforeEach(() => {
    data = new MarketValueImpact(mviProperty);
  ***REMOVED***);

  it('should initialize', () => {
    expect(data).toMatchSnapshot();
  ***REMOVED***);

  it('should have loss totals', () => {
    expect(data.lossTotals('kt', 2033)).toBeDefined();
  ***REMOVED***);
***REMOVED***);
