const Property = require('../models/property');

const map = {
  property: Property,
***REMOVED***;

function getModel(entityType, res) {
  const model = map[entityType](res);
  if (!model) {
    throw new Error('Could not parse class mapping');
  ***REMOVED***

  return model;
***REMOVED***

module.exports = { getModel ***REMOVED***;
