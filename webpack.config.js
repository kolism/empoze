var webpack = require("webpack");
var path = require("path");
var fs = require("fs");
var nodeModules = {};

fs.readdirSync("node_modules")
  .filter(function (x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  entry: ["regenerator-runtime/runtime.js", "./index.js"],
  target: "node",
  output: {
    path: __dirname + "/deploy",
    filename: "app.js",
  },
  optimization: {
    minimize: false,
  },
  externals: nodeModules,
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
