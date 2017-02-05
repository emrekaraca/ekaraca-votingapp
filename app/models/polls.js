'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema ({
  id: Number,
  question: String,
  options: String,
  votes: Array,
  author: String
});


module.exports = mongoose.model('Poll', Poll);
