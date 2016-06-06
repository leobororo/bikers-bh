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
