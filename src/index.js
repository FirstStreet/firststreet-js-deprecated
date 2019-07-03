const FloodIQ = require('./FloodIQ');

const testDaData = async () => {
  const floodIQ = new FloodIQ('VpqgUoepulokFjdxZvE4iMjP8bTtN2PG');
  const data = await floodIQ.parcel.getPropertyByID(100032470544);

  console.log(data.polygon);
***REMOVED***;

testDaData();
