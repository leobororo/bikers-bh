var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ParticipanteSchema = new Schema({
  name  : String,
  email : String,
  birthDate: Date,
  gender: String,
  age : Number
});

var Participante = mongoose.model('Participante', ParticipanteSchema);

module.exports = Participante;
