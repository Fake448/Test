const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: path.resolve(__dirname, "./src/index.js"),
   devServer: {
      contentBase: path.join(__dirname, "build"),
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./src/index-template.html",
      }),
   ],
   module: {
      rules: [
         {
            test: /\.html$/,
            use: ["html-loader"],
         },
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
         },
         {
            test: /\.(svg|jpg|png|gif)$/i,
            use: [
               {
                  loader: "file-loader",
                  options: { name: "[path][name].[contenthash][ext]" },
               },
            ],
         },
      ],
   },
};
