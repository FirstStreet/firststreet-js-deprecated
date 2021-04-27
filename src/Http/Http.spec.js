import fetch from 'node-fetch';

const { Response } = jest.requireActual('node-fetch');

const Http = require('./index');

const { UNAUTHORIZED, UNKNOWN } = require('../Error');

jest.mock('node-fetch');

describe('Http', () => {
  const key = 'aa.bb.cc';
  const options = {
    host: 'https://FAKE-HOST-FOR-TESTING.com',
  };

  const http = new Http(key, options);

  it('Parses the right error messages based on different error status codes', () => {
    const errorDefault = {
      errors: true,
      messages: UNKNOWN,
      debug: undefined,
      rateLimit: undefined,
      status: null,
    };

    const error401 = {
      errors: true,
      messages: UNAUTHORIZED,
      debug: options,
      rateLimit: undefined,
      status: 401,
    };

    const testCaseDefault = http.parseErrors({ status: null });
    expect(testCaseDefault).toEqual(errorDefault);

    const testCase401 = http.parseErrors({ status: 401 }, options);
    expect(testCase401).toEqual(error401);
  });

  it('.getKey should return the user API key', () => {
    expect(http.getKey()).toBe(key);
  });

  it('can resolve http result', (done) => {
    fetch.mockReturnValue(Promise.resolve(new Response('42')));
    return http.execute('GET', '/test').then((data) => {
      expect(data.body).toBe(42);
      done();
    });
  });

  it('when error status code then returns an error', (done) => {
    fetch.mockReturnValue(Promise.resolve(new Response(null, { status: 400 })));
    http.execute('GET', '/test')
      .then(() => {
        done('should throw error');
      })
      .catch((e) => {
        expect(e.errors).toBe(true);
        expect(e.messages).toEqual('Unknown error, please check your request and try again.');
        done();
      });
  });

  it('when empty response body then returns an error', (done) => {
    fetch.mockReturnValue(Promise.resolve(new Response('null')));
    http.execute('GET', '/test')
      .then(() => {
        done('should throw error');
      })
      .catch((e) => {
        expect(e.errors).toBe(true);
        expect(e.messages).toEqual('No body returned from response.');
        done();
      });
  });

  it('when endpoint missing then returns an error', () => {
    fetch.mockReturnValue(Promise.resolve(new Response('null')));
    const res = http.execute('GET');
    expect(res).toEqual(Error('HTTP Error: No endpoint to provide a request to.'));
  });

  it('when unexpected error then returns an error', (done) => {
    fetch.mockReturnValue(Promise.resolve(new Response('')));
    http.execute('GET', '/test')
      .then(() => {
        done('should throw error');
      })
      .catch((e) => {
        expect(e.errors).toBe(true);
        expect(e.messages).toEqual('Network error, check host name.');
        done();
      });
  });
});
