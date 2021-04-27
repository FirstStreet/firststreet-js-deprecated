const { normalizeError } = require('../Error');

async function fetcher(http, path, model) {
  const Model = model;

  try {
    const response = await http.execute('GET', path);
    const { errors, messages } = response;

    if (errors) {
      return normalizeError(messages);
    }

    const m = new Model(response.body);

    return m;
  } catch (e) {
    return normalizeError(null, e);
  }
}

module.exports = { fetcher };
