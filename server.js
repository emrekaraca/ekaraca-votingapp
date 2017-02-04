'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js');
    //passport = require('passport'),
    //mongoose = require('mongoose'),
    //session = require('express-session');

var app = express(),
    path = process.cwd();

//app.use('/public', express.static(path + '/public'));


routes(app);



var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});
