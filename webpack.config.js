const webpack = require('webpack');
const path = require('path');
const fs = require('fs')
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

if (process.env.FB_APPID) {
  const str = `
  FB_APIKEY="${process.env.FB_APIKEY}"
  FB_APPID="${process.env.FB_APPID}"
  CLIENT_ID="${process.env.CLIENT_ID}"
  CLIENT_SECRET="${process.env.CLIENT_SECRET}"
  REFRESH_TOKEN="${process.env.REFRESH_TOKEN}"
  ACCESS_TOKEN="${process.env.ACCESS_TOKEN}"
  `
  fs.writeFileSync('./.env', str, (err) => {
    if (err) throw err
  })
}

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  performance: {
    hints: "warning",
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxSize: 240000,
      minSize: 160000,
    }
  }
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  return config;
};