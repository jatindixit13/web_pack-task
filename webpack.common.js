const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],

      //   test: /\.scss$/,
      //   use: [
      //     "style-loader", //3. Inject styles into DOM
      //     "css-loader", //2. Turns css into commonjs
      //     "sass-loader", //1. Turns sass into css
      //   ],
      // },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[hash].[ext]",
              outputPath: "images",
            },
          },
        ],
        type: "javascript/auto",
      },
    ],
  },
};
