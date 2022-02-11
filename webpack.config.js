const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/deploy",
    filename: "app.js",
  },
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
