# First Street JavaScript Client

[![CircleCI](https://circleci.com/gh/FirstStreet/firststreet-js.svg?style=svg&circle-token=168be542d7448e05f502e123f0f3dbe0f9f8f66b)](https://circleci.com/gh/FirstStreet/firststreet-js)
[![codecov](https://codecov.io/gh/firststreet/firststreet-js/branch/master/graph/badge.svg?token=TATSnMXhTx)](https://codecov.io/gh/firststreet/firststreet-js)

This is the official implementation of the First Street Foundation API in JavaScript.

For more in-depth guides, usage and API access, please see the documentation at [docs.firststreet.dev](https://docs.firststreet.dev).

## Installation

First install firststreet-js:

```bash
npm install firststreet-js
```

Next, import it into your project

```javascript
import FirstStreet from 'firststreet-js';

// Or commonjs
const FirstStreet = require('firststreet-js');
```


## Documentation

In order to use the First Street Foundation API, you must register for an API key at [https://firststreet.dev](https://firststreet.dev).

### Intializing Client

```javascript
// Create a new First Street Foundation API Client
const fs = new FirstStreet("api-key");
```

### Using the client

The client supports querying Firststreet API endpoints corresponding to documentation, extensive examples can be found in ```./tests``` directory.

Generally, for endpoints that require location and fsid, first need to initialize lookup object as in below example, and then use it for querying the data:

```javascript
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('city', { fsid: 4808860 });
    const probability = await lookup.probability('count');
```

For endpoints that do not use fsid, please pass the parameter(s) directly to the endpoint call, as in this example:

```javascript
    const fs = new FirstStreet(apiKey);
    const historic = await fs.historic('event', { id: 12 });
```

Similarly, if endpoint accepts other parameters in addition to location lookup, then these can be passed to the endpoint call directly:
```javascript
    const fs = new FirstStreet(apiKey);
    const lookup = fs.lookup('property', { fsid: 4801470191 });
    const aal = await lookup.economic('aal', { basement: true, floorElevation: 122, depth: 100 });
```

### Errors
Errors from the API and network errors are propagated to caller.
