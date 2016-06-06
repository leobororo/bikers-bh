var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name  : String,
  email : String,
  birthDate: Date,
  gender: String,
  age : Number
});

var User = mongoose.model('User', UserSchema);

module.exports = User;

//var arvind = new User({
//name : 'Leandro',
//age : 99,
//birthDate : '01/01/1915',
//email : 'a@a.com',
//gender: 'Male'
//});
 
//arvind.save(function (err, data) {
//if (err) console.log(err);
//else console.log('Saved ', data );
//});