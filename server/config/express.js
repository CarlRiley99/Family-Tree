var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var config = require('./config');
// var listingsRouter = require('../routes/listings.server.routes');

module.exports.init = function() {
  //connect to database
  //mongoose.connect(config.db.uri);

  //initialize applying
  var app = express();

  //enable request logging for development debugging
  app.use(morgan('dev'));

  //body parsing middleware
  app.use(bodyParser.json());

  //Server static files
  //Set Static path
  //Resource: http://expressjs.com/en/starter/static-files.html
  app.use(express.static('client'));

  //Use the listings router for requests to the api
  //app.use('/api/listings', listingsRouter);

  //Go to homepage for all routes not specified
  app.use('/', express.static('client/pages'));

  return app;
};
