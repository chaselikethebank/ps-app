const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001; 

const connection = require('../config/connection'); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// mongoose.connection()

app.get('/', (req, res) => {
  res.send('Yellow, Whirl!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('EEEECK!!! Something broke!');
});

connection.once('open', () => {
  app.listen(PORT, () => { 
    console.log(`🦌 Server is live @ ${PORT} YEEHAW! 🦌`);
  });
});
