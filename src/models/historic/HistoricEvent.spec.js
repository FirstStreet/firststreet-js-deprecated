const _ = require('lodash/core');
const Event = require('./HistoricEvent.js');

const mock = require('../../__mocks__/historicEvent.json');

describe('historic locality summary', () => {
  it('should construct object', () => {
    const result = new Event(mock);
    expect(result.fsid).toBeUndefined();
    expect(result).toMatchSnapshot();
    expect(result.eventId).toEqual(12);
    expect(result.name).toEqual('river flood across eastern Iowa');
    expect(result.type).toEqual('fluvial');
    expect(result.month).toEqual(6);
    expect(result.year).toEqual(2008);
    expect(result.returnPeriod).toEqual(2733);
    expect(result.geometry).toBeDefined();
    expect(result.properties).toBeDefined();
    expect(result.properties.total).toEqual(354640);
  });

  it('should construct object with null properties', () => {
    const noProperties = _.clone(mock);
    delete noProperties.properties;
    const result = new Event(noProperties);
    expect(result.fsid).toBeUndefined();
    expect(result.eventId).toEqual(12);
    expect(result.properties).not.toBeDefined();
  });
});
