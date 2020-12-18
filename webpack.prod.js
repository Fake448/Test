const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
   mode: "production",
   output: {
      path: path.resolve(__dirname, "build_webpack"),
      filename: "[name].[contenthash].bundle.js",
   },
   plugins: [
      new MiniCssExtractPlugin({filename: "[name].[contenthash].css"}),
      new CleanWebpackPlugin({ verbose: true }),
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
