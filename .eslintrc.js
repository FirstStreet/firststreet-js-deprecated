module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb-base'
  ],
  rules: {
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
  },
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
};
