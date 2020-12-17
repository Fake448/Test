const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
   mode: "production",
   output: {
      path: path.resolve(__dirname, "build_webpack"),
      filename: "index.[contenthash].js",
   },
   plugins: [
      new CleanWebpackPlugin({ verbose: true }),
      new MiniCssExtractPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
         },
      ],
   },
});
