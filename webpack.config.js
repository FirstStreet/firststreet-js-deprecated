const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');

const { NODE_ENV = '' ***REMOVED*** = process.env || {***REMOVED***;
const getHost = () => {
  if (NODE_ENV === 'production') {
    return JSON.stringify('http://api.firststreet.org');
  ***REMOVED***
  // * for dev: return JSON.stringify('http://10.1.0.5');
  // return JSON.stringify('http://apidev.firststreet.org');
  return JSON.stringify('http://api.firststreet.org');
***REMOVED***;

module.exports = {
  entry: {
    app: ['./src/index.js'],
  ***REMOVED***,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'firststreet.js',
    publicPath: '/',
  ***REMOVED***,
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.HTTP_HOST': getHost(),
      'process.env.VERSION': JSON.stringify('1.0'),
    ***REMOVED***),
    new NodemonPlugin(),
  ],
  resolve: {
    extensions: ['.webpack.js', '.js', '.json'],
  ***REMOVED***,
***REMOVED***;
