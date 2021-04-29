const { isArray } = require('lodash');
const Historic = require('./HistoricLocalitySummary.js');

const mock = require('../../__mocks__/historicCitySummary.json');

describe('historic locality summary', () => {
  it('should construct object', () => {
    const result = new Historic(mock);
    expect(result.fsid).toBe(3651000);
    expect(isArray(result.historic)).toBe(true);
    expect(result.historic.length).toBe(3);
    expect(result.historic[0].constructor.name).toBe('HistoricData');
    expect(result.historic[0].eventId).toEqual(1009);
    expect(result.historic[1].eventId).toEqual(1019);
    expect(result.historic[2].eventId).toEqual(1027);
    expect(result.historic[0].data).toBeDefined();
    expect(result.historic[0].data.length).toEqual(18);
  });
});
