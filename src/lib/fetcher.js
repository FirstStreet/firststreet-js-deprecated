async function fetcher(http, path, model) {
  const Model = model;

  const response = await http.execute('GET', path);

  if (response.errors) {
    return response;
  }

  return new Model(response.body);
}

module.exports = { fetcher };
