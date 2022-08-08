const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js',
  },
  output: {
    filename: '[name]-[hash:7].js',
    path: path.join(__dirname, '/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
}
