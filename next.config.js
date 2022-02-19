// next.config.js
const { CompiledExtractPlugin } = require("@compiled/webpack-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const withLinaria = require("next-linaria");
module.exports = withLinaria({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: "@compiled/webpack-loader",
          options: {
            extract: true,
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    });
    config.plugins.push(new MiniCssExtractPlugin());
    config.plugins.push(new CompiledExtractPlugin());
    return config;
  },
});
