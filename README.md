# This package is currently not compatiable with v1.0.0+ of the First Street Foundation API. Please expect an update in the near future.

# First Street JavaScript

[![CircleCI](https://circleci.com/gh/FirstStreet/firststreet-js.svg?style=svg&circle-token=168be542d7448e05f502e123f0f3dbe0f9f8f66b)](https://circleci.com/gh/FirstStreet/firststreet-js)
[![codecov](https://codecov.io/gh/firststreet/firststreet-js/branch/master/graph/badge.svg?token=TATSnMXhTx)](https://codecov.io/gh/firststreet/firststreet-js)

This is the official implementation of the First Street Foundation API in JavaScript. Please use this client if you are using JavaScript to interact with the First Street Foundation API. **Note that this client and the API is currently in beta and subject to change**.

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

```commonjs
const FirstStreet = require('firststreet-js');
```


## Documentation

In order to use the First Street Foundation API, you must register for an API key at [https://firststreet.dev](https://firststreet.dev).

### Intializing Client

```javascript
// Create a new First Street Foundation API Client
const fs = new FirstStreet("api-key");
```

### Risk Summary

The Risk Summary API provides metadata and risk summary for a given `location`.

```javascript
fs.dataSummary.<method>
```

#### Property

* getPropertyByFSID(FSID `string`) - Retrieves a `Property` by specific ID
* getPropertyByLatLng(lat `number`, lng `number`) - Retrieves a `Property` by a coordinate
* getPropertyByAddress(address `string`) - Retrieves a `Property` by address lookup

#### City

* getCityByFSID(FSID `string`) - Retrieves a `City` by specific ID
* getCityByLatLng(lat `number`, lng `number`) - Retrieves a `City` by a coordinate
* getCityByAddress(address `string`) - Retrieves a `City` by address lookup

### Hurricane

The Hurricane Risk API provides hurricane risk data for a given `location`.

```javascript
fs.hurricane.<method>
```

#### Property

* getPropertyByFSID(FSID `string`) - Retrieves Hurricane Risk data for a `Property` by specific ID
* getPropertyByLatLng(lat `number`, lng `number`) - Retrieves Hurricane Risk data for a `Property` by a coordinate
* getPropertyByAddress(address `string`) - Retrieves Hurricane Risk data for a `Property` by address lookup

#### City

* getCityByFSID(FSID `string`) - Retrieves Hurricane Risk data for a `City` by specific ID
* getCityByLatLng(lat `number`, lng `number`) - Retrieves Hurricane Risk data for a `City` by a coordinate
* getCityByAddress(address `string`) - Retrieves Hurricane Risk data for a `City` by address lookup

### Tidal

The Tidal Risk API provides tidal risk data for a given `location`.

```javascript
fs.tidal.<method>
```

#### Property

* getPropertyByFSID(FSID `string`) - Retrieves Tidal Risk data for a `Property` by specific ID
* getPropertyByLatLng(lat `number`, lng `number`) - Retrieves Tidal Risk data for a `Property` by a coordinate
* getPropertyByAddress(address `string`) - Retrieves Tidal Risk data for a `Property` by address lookup

#### City

* getCityByFSID(FSID `string`) - Retrieves Tidal Risk data for a `City` by specific ID
* getCityByLatLng(lat `number`, lng `number`) - Retrieves Tidal Risk data for a `City` by a coordinate
* getCityByAddress(address `string`) - Retrieves Tidal Risk data for a `City` by address lookup

### Market Value Impact

The Market Value Impact API provides market data for a given `location`.

```javascript
fs.mvi.<method>
```

#### Property

* getPropertyByFSID(FSID `string`) - Retrieves Market Value Impact data for a `Property` by specific ID
* getPropertyByLatLng(lat `number`, lng `number`) - Retrieves Market Value Impact data for a `Property` by a coordinate
* getPropertyByAddress(address `string`) - Retrieves Market Value Impact data for a `Property` by address lookup

#### City

* getCityByFSID(FSID `string`) - Retrieves Market Value Impact data for a `City` by specific ID
* getCityByLatLng(lat `number`, lng `number`) - Retrieves Market Value Impact data for a `City` by a coordinate
* getCityByAddress(address `string`) - Retrieves Market Value Impact data for a `City` by address lookup

#### Errors

All errors will have a `Code`, `Status` and `Message` attached to it.


