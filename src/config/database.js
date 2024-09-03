const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conectado a MongoDB');
});

module.exports = mongoose;
