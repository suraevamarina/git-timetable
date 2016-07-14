module.exports = {
  entry: "./app/App.js",
  watch: true,
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
