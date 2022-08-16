const mongoose = require('mongoose');

function conectDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/filmes-seriesDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to database'))
    .catch((err) => {
      return console.log(`Error connecting to database. Error: ${err}`);
    });
}

module.exports = conectDatabase;
