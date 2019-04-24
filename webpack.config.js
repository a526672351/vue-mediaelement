const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/',
  output: {
    library: 'VueMediaelement',
    libraryTarget: 'commonjs2',
    filename: 'vue-mediaelement.js',
    path: resolve('dist'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      { test: /\.js$/,
        loader: 'babel-loader'
      },
      { test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|swf)$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('vue-mediaelement.css')
  ]
};