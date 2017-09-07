const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./config/webpack.dev.js");

const app = express();
const compiler = webpack(config);
const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

const isDevelopment = false;
if (isDevelopment) {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
} else {
  //app.use(express.static(DIST_DIR));

  //app.get("*", (req, res) => res.sendFile(HTML_FILE));
}


app.get('/api', (req, res) => {
  res.send('YO');
});

const port = process.env.PORT || 3000;
console.log('************************* port', port);
app.listen(port);
