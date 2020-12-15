const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: "./src/index.js",
   devServer: {
    contentBase: path.join(__dirname, 'dist'),
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./src/index-template.html",
      }),
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
         },
      ],
   },
};
