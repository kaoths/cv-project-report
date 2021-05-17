const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  webpack: (config, { webpack }) => {
    config.plugins = config.plugins || [];
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { svgoConfig: { plugins: [{ removeViewBox: false }] } },
        },
      ],
    });
    return config;
  },
});
