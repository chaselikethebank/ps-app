const express = require('express');
const path = require('path')
const zoneDataPath = path.join(__dirname, 'local_db', 'zoneData.json');
let zoneData = require(zoneDataPath);
const userDataPath = path.join(__dirname, 'local_db', 'userData.json');
let userData = require(userDataPath);
const ETDataPath = path.join(__dirname, 'local_db', 'ETData.json');
let ETData = require(ETDataPath);
const fs = require('fs');
const port = 3006;
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
app.get('/api/ETData', (req, res) => res.json(ETData));




// POST route to add new zone data
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

app.put('/api/zoneData/:id', (req, res) => {
  try {
    const zoneId = req.params.id;
    const updatedData = req.body;
    
    const zoneIndex = zoneData.findIndex((zone) => zone.num === zoneId);
    
    if (zoneIndex === -1) {
      return res.status(404).json({ error: 'Zone not found' });
    }
    zoneData[zoneIndex] = {
      ...zoneData[zoneIndex], 
      ...updatedData, 
    };
    
    fs.writeFileSync(zoneDataPath, JSON.stringify(zoneData, null, 2));
    
    res.json({ message: 'Zone data updated successfully', data: zoneData[zoneIndex] });
  } catch (error) {
    console.error('Error updating JSON file:', error);
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


