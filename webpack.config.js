const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: [
    "./src/app.ts"
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src/services"),
      path.resolve(__dirname, "src/controllers")
    ],
    alias: {
      applicationStyles: __dirname + "/src/styles/app.scss",
      flexboxStyles: __dirname + "/node_modules/flexboxgrid/css/flexboxgrid.min.css",
      constants: __dirname + "/src/constants.ts"
    },
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], exclude: /node_modules/
      }
    ]
  },
  devtool: "source-map"
};
