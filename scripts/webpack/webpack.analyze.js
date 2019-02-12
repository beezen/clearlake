const webpackMerge = require('webpack-merge')
const webpackBundle = require('./webpack.bundle')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = webpackMerge(webpackBundle, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 8082
    })
  ]
})