# Flood iQ JavaScript

[![CircleCI](https://circleci.com/gh/FirstStreet/floodiq-javascript.svg?style=svg&circle-token=168be542d7448e05f502e123f0f3dbe0f9f8f66b)](https://circleci.com/gh/FirstStreet/floodiq-javascript)
[![codecov](https://codecov.io/gh/firststreet/floodiq-javascript/branch/master/graph/badge.svg?token=TATSnMXhTx)](https://codecov.io/gh/firststreet/floodiq-javascript)

This is the official implementation of the Flood iQ API in JavaScript. Please use this client if you are using JavaScript to interact with the Flood iQ API.

For more in-depth guides, usage and API access, please see the documentation at [docs.floodiq.dev](https://docs.floodiq.dev)

## Installation

First install floodiq-javascript

```bash
npm install floodiq-javascript
```

Next, import it into your project

```javascript
import Floodiq from 'floodiq-javascript';
```

## Documentation

In order to use the Flood iQ API, you must register for an API key at [https://floodiq.dev](https://floodiq.dev).

### Intializing Client

```javascript
// Create a new Flood iQ API Client
const fiq = new FloodIQ("api-key");
```

### Parcel

```javascript
fiq.Parcel.<method>
```

#### Property

* GetPropertyByID(ID `string`) - Retrieves a `ParcelProperty` by specific ID
* GetPropertyByLatLng(lat `float64`, lng `float64`) - Retrieves a `ParcelProperty` by a coordinate

#### City

* GetCityByID(ID `string`) - Retrieves a `ParcelProperty`  by specific ID
* GetCityByLatLng(lat `float64`, lng `float64`) - Retrieves a `ParcelProperty` by a coordinate

#### Hurricane

#### Tidal

### Tile Service

Generally, while loading tiles, you can provide an X/Y/Z URL to access the tile service directly (such as api.floodiq.com/tile/hurricane/z/y/x.png?key=abc123&type=c3&year=2032). This portion of the client is included if you need the raw bytes returned from the tile service.

#### Tile

#### Errors

All errors will have a `Code`, `Status` and `Message` attached to it.

#### Rate Limits

