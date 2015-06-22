var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');


module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel'
      },{
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }],
      noParse: [pathToReact]
    }
};