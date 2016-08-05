var webpack = require('webpack')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        "presets": ["react", "es2015", "stage-0"]
      }
    }]
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  // ]
};
