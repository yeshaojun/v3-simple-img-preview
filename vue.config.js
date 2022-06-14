const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        {
          from: path.resolve(__dirname, "./src/types/index.ts"),
          to: path.resolve(__dirname, "./lib/index.d.ts"),
        },
      ]),
    ],
    module: {
      rules: [
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: "url-loader",
            options: {
              name: "img/[name].[ext]",
              esModule: false,
              limit: 3000,
            },
          },
        },
      ],
    },
  },
  css: {
    extract: false,
  },
  productionSourceMap: false,
};
