const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public'),
      },
      {
        directory: path.join(__dirname, './src/assets'),
      },
    ],
    compress: true,
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // For CSS, if needed
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
      {
        test: /\.js$/, // For JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      templateContent: () => `

      <title>2D Game Development with JS</title>
      <body>
      
      <canvas id="canvas1"></canvas>
        <!-- characters -->
        <!-- props -->
        <!-- environment -->
    
      </body>
    `,
    }),
  ].concat(
    devMode ? [] : [new MiniCssExtractPlugin({ filename: 'style.css' })]
  ),
}
