const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://Mounika:MW8Oz6fZWOxtvy2L@cluster0.ufjv0vk.mongodb.net/`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;