var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  lastname: String,

}, {timestamps: true});

const users = mongoose.model('User', UserSchema);
 module.exports = users;