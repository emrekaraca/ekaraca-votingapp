'use strict';

var path = process.cwd();

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path + '/public/index.html');
  });

  app.get('/vote/:pollid', function (req, res) {
    var pollid = req.params.pollid;
    res.end("You are on the voting page for: " + pollid);
  });

  app.get('/viewresults/:pollid', function (req, res) {
    var pollid = req.params.pollid;
    res.end("You are on the results page for: " + pollid);
  });

  app.get('/userpolls', function (req, res) {
    res.end("You will be able to see and delete your own polls here!");
  });

  app.get('/newpoll', function (req, res) {
    res.end("This is where you will be able to create a poll!");
  });








}
