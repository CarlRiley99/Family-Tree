var config = require('./config');
var mongoose = require('mongoose');
var express = require('./express');

module.exports.start = function() {
  var app = express.init();
  app.listen(process.env.PORT || config.port, function() {
    console.log('App listening on port', config.port);
  });
};

//proncess.env.PORT listens to the port heroku uses: https://stackoverflow.com/questions/14322989/first-heroku-deploy-failed-error-code-h10

//This file is in charge of initializing express.js and uses it to start
//begins to listen for any requests. The server is started in server.js
