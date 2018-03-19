/* eslint-disable import/no-extraneous-dependencies */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const srcPath = `${__dirname}/src`;


module.exports = {
  context: srcPath,
  entry: {
    ridi_token_refresher: `${srcPath}/a.js`,
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    sourceMapFilename: '[file].map',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|(\.test.js)/,
        include: srcPath,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        filename: '[name].[chunkhash].js',
        url: '[name].[chunkhash].js.map',
        compress: {
          warnings: false,
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
