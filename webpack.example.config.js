const {resolve} = require('path');
const options = require('./webpack.config');

options.mode = 'development';
options.entry = './example/';

options.output.filename = 'example.js';
options.output.libraryTarget = 'var';
options.output.publicPath = '/dist/';

options.plugins = excludePlugins(['clean-webpack-plugin'], options.plugins);;

options.devServer = {
  contentBase: [
    resolve(__dirname, "example"),
  ],
  publicPath: '/dist/'
};

module.exports = options;

function excludePlugins (plugins, originPlugins) {
  const length = originPlugins.length;
  for(let i = length; i >= 0; i--) {
    plugins.forEach((element, index) => {
      let loadObject = require(element);
      if (originPlugins[i] instanceof loadObject) {
        originPlugins.splice(i, 1);
      }
      loadObject = null;
    });
  };
  return originPlugins;
}