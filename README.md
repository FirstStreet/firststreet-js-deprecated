# First Street JavaScript

[![CircleCI](https://circleci.com/gh/FirstStreet/firststreet-js.svg?style=svg&circle-token=168be542d7448e05f502e123f0f3dbe0f9f8f66b)](https://circleci.com/gh/FirstStreet/firststreet-js)
[![codecov](https://codecov.io/gh/firststreet/firststreet-js/branch/master/graph/badge.svg?token=TATSnMXhTx)](https://codecov.io/gh/firststreet/firststreet-js)

This is the official implementation of the First Street Foundation API in JavaScript. Please use this client if you are using JavaScript to interact with the First Street Foundation API.

For more in-depth guides, usage and API access, please see the documentation at [docs.firststreet.dev](https://docs.firststreet.dev).

## Installation

First install firststreet-js

```bash
npm install firststreet-js
```

Next, import it into your project

```javascript
import FirstStreet from 'firststreet-js';
```

## Documentation

In order to use the First Street Foundation API, you must register for an API key at [https://firststreet.dev](https://firststreet.dev).

### Intializing Client

```javascript
// Create a new First Street Foundation API Client
const fs = new FirstStreet("api-key");
```

### Risk Summary

The risk summary API provides metadata and risks summary for a given `location`.

```javascript
fs.dataSummary.<method>
```

#### Property

* GetPropertyByFSID(FSID `string`) - Retrieves a `Property` by specific ID
* GetPropertyByLatLng(lat `number`, lng `number`) - Retrieves a `Property` by a coordinate
* GetPropertyByAddress(address `string`) - Retrieves a `Property` by address lookup

#### City

* GetCityByFSID(FSID `string`) - Retrieves a `City` by specific ID
* GetCityByLatLng(lat `number`, lng `number`) - Retrieves a `City` by a coordinate
* GetCityByAddress(address `string`) - Retrieves a `City` by address lookup

#### Errors

All errors will have a `Code`, `Status` and `Message` attached to it.


