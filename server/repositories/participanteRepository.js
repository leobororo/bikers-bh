var Promise = require('promise');
var Participante = require('../models/participante.js');

var ParticipanteRepository = (function() {

  function bindBody(body, participante) {
    participante.name = body.name;
    participante.email = body.email;
    participante.gender = body.gender;
  };

  function save(body) {
    return new Promise(function(fullfill, reject) {
      if(body._id) {
        Participante.findById(body._id, function(err, data) {
          bindBody(body, data);
          data.save(function (err, participante) {
            if (err) return reject(err);
            fullfill(participante);
          });
        });
      }
    });
  };

  function create(body) {
    return new Promise(function(fullfill, reject) {
      var participante = new Participante();
      bindBody(body, participante);
      participante.save(function (err, participante) {
        if (err) return reject(err);
        fullfill(participante);
      });
    });

  }

  function remove(id) {
    return new Promise(function(fullfill, reject){
      Participante.remove({_id: id}, function (err) {
        if (err) return reject(err);
        fullfill({"message": "Record Removed"});
      });
    });
  };

  function findAll(query) {
    return new Promise(function(fulfill, reject){
      Participante.find(query, {"name" : true, "email": true, "gender": true}, function(err, participantes) {
        if(err) return reject(err);
        fulfill(participantes);
      });
    });
  };

  function findById(id) {
    return new Promise(function(fullfill, reject) {
      Participante.findById(id, function(err, participante) {
        if(err) return reject(err);
        fullfill(participante);
      });
    });
  };

  return {
    save: save,
    findAll: findAll,
    findById: findById,
    remove: remove,
    create: create
  };

})();


module.exports.ParticipanteRepository = ParticipanteRepository;
