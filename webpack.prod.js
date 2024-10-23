const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  performance: {
    maxAssetSize: 500000, // Set the max asset size to 500 KiB (or adjust as needed)
    maxEntrypointSize: 500000, // Set the max entry point size
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['mozjpeg', { quality: 70 }],
              ['pngquant', { quality: [0.6, 0.8] }],
            ],
          },
        },
      }),
    ],
  },
});
