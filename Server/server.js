const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.options('*', cors());
const path = require('path');

const Schemas = require('./DB/Schemas.js');

app.use(express.static(path.join(__dirname, '/../dist')));

app.get('/api/item/:name', function(req, res) {
  console.log('Item Get');
  Schemas.Items.find({name: req.params.name}, function(err, data) {
    if(err) throw err;
    res.json(data);
  })
});

app.get('/api/champion/:name', function(req, res) {
  console.log('Champion Get');
  Schemas.Champions.find({name: req.params.name}, function(err, data) {
    if(err) throw err;
    res.json(data);
  })
});

module.exports = app;