'use strict'
const path = require('path')
const config = require('../config')
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { VuetifyPlugin } = require('webpack-plugin-vuetify');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': resolve('src'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyPlugin({ autoImport: true }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset/resource'
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset/resource'
        // options: {
        //   limit: 10000,
        //   name: utils.assetsPath('media/[name].[hash:7].[ext]')
        // }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset/resource'
        // options: {
        //   limit: 10000,
        //   name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        // }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { modules: false }
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader',
          {
            loader: 'css-loader',
            options: { modules: false }
          },
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  },
}