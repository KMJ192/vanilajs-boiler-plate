const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isProd = process.env.NODE_ENV === 'PRODUCTION';

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      config: path.resolve(__dirname, 'postcss.config.js'),
    },
  },
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
  },
};

module.exports = {
  entry: './index.ts',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@react': path.resolve(__dirname, 'react'),
      '@router': path.resolve(__dirname, 'router'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/i,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss/i,
        oneOf: [
          {
            test: /\.module\.s[ac]ss/i,
            use: [
              MiniCssExtractPlugin.loader,
              cssLoader,
              postcssLoader,
              'sass-loader',
            ],
          },
          {
            test: /\.s[ac]ss/i,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              postcssLoader,
              'sass-loader',
            ],
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack',
      template: './public/index.html',
      filename: 'index.html',
      minify: isProd
        ? {
            removeComments: true,
            useShortDoctype: true,
          }
        : false,
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css',
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
