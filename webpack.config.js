module.exports = {
    // Uncomment if you need source maps
    // devtool: "source-map",
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin({
          minify: CssMinimizerPlugin.cleanCssMinify,
          // Uncomment this line for options
          // minimizerOptions: { compatibility: 'ie11,-properties.merging' },
        }),
      ],
    },
  };