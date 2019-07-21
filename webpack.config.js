
const path = require("path");
const webpack = require("webpack");
require("babel-core/register");
require("babel-polyfill");
//require("babel");

module.exports = {
  entry: ['babel-polyfill',"./src/index.js"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    compress: 
    true,
    hotOnly: true,
    // proxy: {
    //     '/api': {
    //         target: 'http://localhost:3001',
    //         secure: false
    //     }
    // }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};