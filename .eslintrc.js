module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  ***REMOVED***,
  extends: [
    'airbnb-base'
  ],
  rules: {
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
  ***REMOVED***,
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  ***REMOVED***,
  parserOptions: {
    ecmaVersion: 2018
  ***REMOVED***,
***REMOVED***;
