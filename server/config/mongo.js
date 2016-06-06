var mongoose = require('mongoose');

var config = {
  database: {
      connectionString: "mongodb://localhost/bikers-bh",
      databaseName: "bikers-bh"
  },
  debug: {
    database: {
      connectionString: "mongodb://localhost/bikers-bh",
      databaseName: "bikers-bh"
    }
  }
};
mongoose.connect(config.database.connectionString);

var db = mongoose.connection;
 
db.on('error', function (err) {
console.log('connection error', err);
});
db.once('open', function () {
console.log('connected.');
});
