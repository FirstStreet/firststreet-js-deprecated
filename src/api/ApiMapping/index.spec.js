const sut = require('./index');

describe('model mapping', () => {
  it('can return mapping', () => {
    const result = sut('location', 'detail');
    expect(result).not.toBeUndefined();
    expect(result).toMatchSnapshot();
    expect(result.model.property.name).toEqual('LocationPropertyDetail');
  });
});
