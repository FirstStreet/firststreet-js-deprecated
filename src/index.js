// module.exports = require('./FirstStreet');

const FirstStreet = require('./FirstStreet');

const API_KEY = '';

const fs = new FirstStreet(API_KEY);

async function test() {
  const res = await fs
    .lookup('property', {fsid: '4802819013'})
    .location('summary');

  console.log('test', res);

  return res;
}

test();
