'use strict';

var path = process.cwd();
var PollHandler = require(process.cwd() + '/app/controllers/pollHandler.server.js');

var pollHandler = new PollHandler();

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path + '/public/index.html');
  });

  app.get('/vote', function (req, res) {
    var pollid = req.params.pollid;
    res.sendFile(path + '/public/vote.html');
  });

  app.get('/results', function (req, res) {
    var pollid = req.params.pollid;
    res.sendFile(path + '/public/results.html');
  });

  app.get('/userpolls', function (req, res) {
    res.sendFile(path + '/public/userpolls.html');
  });

  app.get('/newpoll', function (req, res) {
    res.sendFile(path + '/public/newpoll.html');
  });
/*
  app.route('/api/polls/:pollid')
    .get(pollHandler.getPoll(req.params.pollid))
    .post(pollHandler.votePoll(req.params.pollid))
    .delete(pollHandler.deletePoll(req.params.pollid))

  app.route('/api/polls/addpoll')
    .post(pollHandler.addPoll)
*/
  app.route('/api/polls')
    .get(pollHandler.getPolls);




// ROUTE FILE HAS API URL FOR NEWPOLL POST ACTION AND INVOKES SERVER FN TO STORE NEWPOLL DATA IN DB
// API THAT RESPONDS TO GET/POST/DELETE with FN's from Server script



}
