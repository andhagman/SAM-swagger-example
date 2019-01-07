const path = require('path')

module.exports = {
  entry: {
    'test-get': './src/lambdas/http/test-get.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }]
  },
  devtool: 'source-map',
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: ['aws-sdk'],
  target: 'node'
}
