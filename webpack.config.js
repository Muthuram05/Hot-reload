const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
//   devServer: {
//     static: path.join(__dirname, 'dist'), // Use 'static' instead of 'contentBase'
//     hot: true, // Enable hot module replacement
//     historyApiFallback: true,
//     // open: true, // Automatically open the browser
//     port: 3000, // Specify the port if needed
//   },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
