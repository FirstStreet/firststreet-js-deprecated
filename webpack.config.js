const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');

const { NODE_ENV = '' } = process.env || {};
const getHost = () => {
  if (NODE_ENV === 'production') {
    return JSON.stringify('http://api.firststreet.org');
  }
  // * for dev: return JSON.stringify('http://10.1.0.5');
  return JSON.stringify('http://apidev.firststreet.org');
};

module.exports = {
  entry: {
    app: ['./src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'floodiq.js',
    publicPath: '/',
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.HTTP_HOST': getHost(),
      'process.env.VERSION': JSON.stringify('1.0'),
    }),
    new NodemonPlugin(),
  ],
  resolve: {
    extensions: ['.webpack.js', '.js', '.json'],
  },
};
