import path from 'path'
import { Configuration } from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import * as webpackDevServer from 'webpack-dev-server'

const config: Configuration = {
  mode: (process.env.NODE_ENV as 'production' | 'development' | undefined) ?? 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader' 
          }, {
            loader: 'sass-loader'
          }]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
}

export default config
