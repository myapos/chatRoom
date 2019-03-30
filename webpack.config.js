const webpack = require('webpack');
const path = require('path');
const { CLIENT_PORT, BASE_URL } = require('./constants/common');

// const { CLIENT_PORT } = common;
// console.log('CLIENT_PORT', CLIENT_PORT);

// const PORT = 1234;

const config = {
  entry: {
    main: './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: `${BASE_URL}:${CLIENT_PORT}/dist/`,
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
    },
  },
  node: {
    fs: 'empty',
    child_process: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [path.resolve(__dirname, './src')],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.styl$/,
        // use: 'css-loader',
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'stylus-loader', // compiles Stylus to CSS
          },
        ],
      },
    ],
  },

  devServer: {
    hot: true,
    overlay: true,
    noInfo: false,
    compress: true,
    port: CLIENT_PORT,
    publicPath: `${BASE_URL}:${CLIENT_PORT}/dist/`,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: `Build: ${new Date().toLocaleString()}`,
    }),
    new webpack.DefinePlugin({
      'process.env.PORT': process.env.PORT,
      'process.env.APIKEY': JSON.stringify(process.env.APIKEY),
      'process.env.AUTHDOMAIN': JSON.stringify(process.env.AUTHDOMAIN),
      'process.env.DATABASEURL': JSON.stringify(process.env.DATABASEURL),
      'process.env.PROJECTID': JSON.stringify(process.env.PROJECTID),
      'process.env.STORAGEBUCKET': JSON.stringify(process.env.STORAGEBUCKET),
      'process.env.MESSANGINSSENDERID': JSON.stringify(
        process.env.MESSANGINSSENDERID
      ),
    }),
  ],
};

// console.log('process.env.APIKEY', process.env.APIKEY);

module.exports = config;
