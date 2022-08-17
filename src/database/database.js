const mongoose = require('mongoose');

function conectDatabase() {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to database MongoDB Atlas'))
    .catch((err) => {
      return console.log(`Error connecting to database. Error: ${err}`);
    });
}

module.exports = conectDatabase;
