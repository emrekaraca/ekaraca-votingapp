'use strict';

var Poll = require('../models/polls.js');


var firstPoll = new Poll();
firstPoll.question = "WHAT?";
firstPoll.options = "ABC";
firstPoll.author = "EMRE";
firstPoll.save(function (err) {
  if (err) {
    throw err;
  }

  console.log("first user created!");
});

function PollHandler () {
  console.log("PollHandler active");

  this.getPolls = function (req, res) {
    console.log("connecting to db");
    Poll
      .find({})
      .exec(function (error, poll) {
        if (error) { throw error; }
        var result = poll[0]
        //console.log(poll);
        res.json(poll);
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

      console.log("new user was created!");
    });

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
