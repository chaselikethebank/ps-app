const express = require('express');
const path = require('path')
const zoneDataPath = path.join(__dirname, 'local_db', 'zoneData.json');
let zoneData = require(zoneDataPath);
const userDataPath = path.join(__dirname, 'local_db', 'userData.json');
let userData = require(userDataPath);
const fs = require('fs');
const port = 3001;
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || port; 
const connection = require('../config/connection'); 





app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')));

// mongoose.connection()

app.get('/api/zoneData', (req, res) => res.json(zoneData));
app.get('/api/userData', (req, res) => res.json(userData));



// POST route to add new data
app.post('/api/zoneData', (req, res) => {
  try {
    const newData = req.body;
    zoneData.push(newData);
    fs.writeFileSync(zoneDataPath, JSON.stringify(zoneData, null, 2));
    res.json({ message: 'Data added successfully', data: newData });
  } catch (error) {
    console.error('Error writing JSON file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

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
