// module.exports = require('./FloodIQ');
const FloodIQ = require('./FloodIQ');

const test = async () => {
  const floodIQ = new FloodIQ('VpqgUoepulokFjdxZvE4iMjP8bTtN2PG');
  const data = await floodIQ.parcel.getCityByID(1001400);

  console.log('poly', data.polygon, data);
***REMOVED***;

***REMOVED***
