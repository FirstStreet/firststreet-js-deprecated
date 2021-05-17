const isArray = require('lodash/isArray');
const Historic = require('./HistoricPropertySummary.js');

const mock = require('../../__mocks__/historicPropertySummary.json');

describe('historic property summary', () => {
  it('should construct object', () => {
    const result = new Historic(mock);
    expect(result.fsid).toBe(362460464);
    expect(isArray(result.historic)).toBe(true);
    expect(result.historic.length).toBe(1);
    expect(result.historic[0].constructor.name).toBe('HistoricProperty');
    expect(result.historic[0].eventId).toEqual(1019);
  });
});
