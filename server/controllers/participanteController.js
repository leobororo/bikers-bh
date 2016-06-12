var ParticipanteController = (function() {

  var repository = require('../repositories/participanteRepository');

  function findAll() {

    return function (req, res) {
      repository.ParticipanteRepository.findAll({})
      .then(
        function (data) {
          return res.json(data);
        }
      )
      .catch(
        function (err) {
          return res.json(err);
        }
      )
    }
  };

  function findById() {
    return function(req, res) {
      repository.ParticipanteRepository.findById(req.params.id)
      .then(
        function(data) {
          return res.json(data);
        }
      )
      .catch(
        function(err) {
          return res.json(err);
        }
      )
    }
  };

  function save() {
    return function(req, res) {
      repository.ParticipanteRepository.save(req.body)
      .then(
        function(data) {
          return res.json(data);
        }
      )
      .catch(
        function(err) {
          return res.json(err);
        }
      )
    }
  };

  function create() {
    return function(req, res) {
      repository.ParticipanteRepository.create(req.body)
      .then(
        function(data) {
          return res.json(data);
        }
      )
      .catch(
        function(err) {
          return res.json(err);
        }
      )
    }
  };

  function remove() {
    return function(req, res) {
      repository.ParticipanteRepository.remove(req.params.id)
      .then(
        function(data) {
          return res.json(data);
        }
      )
      .catch(
        function(err) {
          return res.json(err);
        }
      )
    }
  };

  return {
    findAll: findAll,
    findById: findById,
    save: save,
    remove: remove,
    create: create
  }


})();


module.exports = ParticipanteController;
