const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src", "./index.js"),
    card_widget: path.resolve(
      __dirname,
      "src/widget_components",
      "./card_widget/index.js"
    ),
    feedback_widget: path.resolve(
      __dirname,
      "src/widget_components",
      "./feedback_widget/index.js"
    ),
  },

  output: {
    path: path.join(__dirname, "public/build"),
    filename: "[name]_bundle.js",
    publicPath: "/",
    clean: true,
  },
  mode: process.env.NODE_ENV || "development",
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
  devServer: { contentBase: path.join(__dirname, "src") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(jpg|jpeg|png|gif|mp3)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
