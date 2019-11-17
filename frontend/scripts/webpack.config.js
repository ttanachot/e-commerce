const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../src/index.js'),
  ],
  output: {
    filename: 'static/js/[name].[chunkhash:8].js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.json', '.js', '.jsx', '.css', '.less'],
    alias: {
      components: path.resolve(__dirname, '../src/components'),
    },
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader",
        },
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/, /\.csv$/, /\.ico$/],
        loader: require.resolve('url-loader'),
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
      },
      {
        test: /\.less$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ],
      },
      {
        test: /\.scss$/,
          issuer: {
            exclude: /\.less$/,
          },
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },

          ],
      },
      {
        test: /\.scss$/,
        issuer: /\.less$/,
          use: {
            loader: './sassVarsToLess.js',
          },
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../public/index.html",
      filename: "./index.html",
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BASENAME: `'${process.env.BASENAME}'`,
      },
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../public/files'),
        to: path.join(__dirname, '../dist/public/files'),
        toType: 'dir',
      },
      {
        from: path.join(__dirname, '../public/favicon.ico'),
        to: path.join(__dirname, '../dist/public/favicon.ico'),
      },
    ]),
  ],
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
    host: '0.0.0.0',
    port: 7001,
    historyApiFallback: true,
  },
};
