const sut = require('./index');

describe('model mapping', () => {
  it('can return mapping', () => {
    const result = sut('location', 'detail');
    expect(result).not.toBeUndefined();
    expect(result).toMatchSnapshot();
    expect(result.model.property.name).toEqual('LocationPropertyDetail');
  });

  it('should throw error when unknown service name', () => {
    expect(() => sut('unknown', 'detail')).toThrow('Invalid service unknown. Allowed: location, probability, historic, economic');
  });

  it('should throw error when unknown detail level', () => {
    expect(() => sut('location', 'unknown')).toThrow('Invalid detail level unknown for service location. Allowed: detail, summary');
  });
});
