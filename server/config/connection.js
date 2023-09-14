require('dotenv').config();

const mongoose = require('mongoose');

const DB_PASSWORD = process.env.PW;
const DB_URL = `mongodb+srv://cddott:${DB_PASSWORD}@cluster0.qdfzucr.mongodb.net/`;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB! Cheers');
  })
  .catch(error => {
    console.error('Connection error eeeck...:', error);
  });


module.exports = mongoose.connection;
