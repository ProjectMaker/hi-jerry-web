const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./config/webpack.dev.js");
const api = require('./api');
const app = express();
const compiler = webpack(config);
const jsonwebtoken = require('jsonwebtoken');

const DIST_DIR = path.join(__dirname, "dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const isDevelopment = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://dev:Rudeboy77@ds161890.mlab.com:61890/affinity');

const authentification = require('./shared/authentification');
app.use(authentification.initialize());

app.use('/user', api.user.routes);
app.use('/api', authentification.authenticate(), api.place.routes);


if (isDevelopment) {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));

  app.get("^/front*", (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  app.use(express.static(DIST_DIR));

  app.get('/front', (req, res) => {
    res.sendFile(HTML_FILE);
  });
}

//const HiJerryError = require('./shared/error');
app.listen(port);