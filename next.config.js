const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});

module.exports = withCSS(
  withSass({
    webpack(config, { dev }) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|mp4|webm|svg|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
          },
          loader: "file-loader",
          options: {
            esModule: false,
            outputPath: "./static/css/",
            publicPath: "./",
          },
        },
      });
      if (config.mode === "production") {
        if (Array.isArray(config.optimization.minimizer)) {
          config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
        }
      }
      return config;
    },
  })
);
