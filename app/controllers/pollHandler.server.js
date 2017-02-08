'use strict';

var Poll = require('../models/polls.js');

function PollHandler () {

  this.getPolls = function (req, res) {
    console.log("connecting to db");
    Poll
      .find({})
      .exec(function (error, poll) {
        if (error) { throw error; }
        console.log(poll);
        res.json(poll);
        res.end();
      })
    console.log("Polls received");
  }

  this.newPoll = function (req, res) {
    console.log('###############');
    console.log('    -    pollHandler.server.js    - ');
    console.log("adding poll");
    console.log(req.body);
    var newPoll = new Poll();
    newPoll.question = req.body.question;
    newPoll.options = req.body.options;
    newPoll.author = req.body.author;
    newPoll.save(function (err) {
      if (err) {
        throw err;
      }
      console.log("new poll was created!");
      res.end();
    });
  }

  this.removePoll = function (req, res) {
    console.log('###############');
    console.log('    -    pollHandler.server.js    - ');
    console.log("deleting poll");
    console.log(req.body);
    Poll
      .findByIdAndRemove(req.body.id)
      .exec(function(error, ok) {
        console.log('succesfully deleted');
        res.end();
      })
  }






};

module.exports = PollHandler;

/*
this.addPoll = function (req, res) {
  Polls XXX
}

this.deletePoll = function (req, res) {
  Polls
    .findOne...XXX
}



var newPoll = new Poll();

newPoll.id = newPollId;
newPoll.question = newPollQuestion;
newpoll.options = newPollOptions.;
newpoll.votes = [];
newpoll.author = newPollAuthor;

newPoll.save(function (err) {
  if (err) {
    throw err;
  }

  return done(null, newPoll);
});
*/

// SERVER SCRIPT HAS 3 FN'S: GETPOLLS // ADDPOLL // DELETEPOLL
