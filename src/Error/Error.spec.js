const { normalizeError ***REMOVED*** = require('./index');

describe('Error', () => {
  it('Populates with error and message properties', () => {
    const message = 'There has been an error';
    const error = normalizeError(message);

    expect(error).toHaveProperty('errors', true);
    expect(error).toHaveProperty('messages', message);
  ***REMOVED***);
***REMOVED***);
