const Property = require('../models/Property');

const map = {
  property: Property,
};

function getModel(entityType, res) {
  const model = map[entityType](res);
  if (!model) {
    throw new Error('Could not parse class mapping');
  }

  return model;
}

module.exports = { getModel };
