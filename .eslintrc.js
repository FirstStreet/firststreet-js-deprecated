module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  parser: "@babel/eslint-parser",
  rules: {
    'class-methods-use-this': 'off',
    "indent": ["error", 2],
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'prefer-promise-reject-errors': 'off',
  },
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 12
  }
};
