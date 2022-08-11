require('dotenv').config();
var mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();

async function conndb()
{
  try {
    await mongoose.connect(process.env.PORT, {useNewUrlParser: true, useUnifiedTopology: true});
//Get the default connection
var db  = await mongoose.connection;
console.log("Database connected succsefully");
  } catch (error) {
    db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
  }

//Bind connection to error event (to get notification of connection errors)
}

console.log(conndb());
// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
