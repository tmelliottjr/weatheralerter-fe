var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    disableHostCheck: true,
    public: 'http://07d13a56.ngrok.io',
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      API_URL: "'api.swa.tmelliottjr.com'",
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
} else {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      API_URL: "'http://127.0.0.1:5000'"
    })
  ])
}


// let API_URL = {
//   production: 'api.swa.tmelliottjr.com',
//   development: 'localhost:5000'
// }

// let env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

// module.exports = {
//   plugins: [
//     new webpack.DefinePlugin({
//       'API_URL': API_URL[env]
//     })
//   ]
// }