const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// BundleAnalyzer는 Bundle 최적화 용도로 보통 저는 사용합니다.

module.exports = {
  entry: `${path.resolve(__dirname, "../src")}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser"
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "../src/components"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
      "@modules": path.resolve(__dirname, "../src/modules"),
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@utils": path.resolve(__dirname, "../src/utils"),
      "@styles": path.resolve(__dirname, "../src/styles"),
      "@assets": path.resolve(__dirname, "../src/assets"),
      "@types": path.resolve(__dirname, "../src/types"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      zlib: require.resolve('browserify-zlib'),
      url: require.resolve('url/'),
      vm: false,
      buffer: require.resolve("buffer/"),
      process: require.resolve("process/browser")
    },
  },
};