'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    //passport = require('passport'),
    mongoose = require('mongoose');
    //session = require('express-session');

var app = express(),
    path = process.cwd();

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(path + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));


mongoose.connect('mongodb://dbuser:userpwd@ds139939.mlab.com:39939/ekaraca-votingapp');
// 2 collections: 1) Polls & 2) Users

routes(app);



var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port + '...');
});
