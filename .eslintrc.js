module.exports = {
  env: {
    //browser: true,
    //commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  parser: "@babel/eslint-parser",
  rules: {
    '@babel/new-cap': 'error',
    '@babel/no-invalid-this': 'error',
    '@babel/no-unused-expressions': 'error',
   // '@babel/object-curly-spacing': 'error',
   // 'object-curly-spacing':'off',
    'no-unused-expressions':'off',
    'no-invalid-this':'off',
    'new-cap':'off',
    '@babel/semi': 'error',
    'class-methods-use-this': 'off',
    'indent': ['error', 2],
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'prefer-promise-reject-errors': 'off',
  },
  plugins: [
    'prettier',
    '@babel'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 11
  }
};
