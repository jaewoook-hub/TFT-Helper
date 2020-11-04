const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.options('*', cors());
const path = require('path');
const LEAGUE = require('./leagueoflegends.js');
const fetch = require('node-fetch');

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

app.get('/api/summoner/:summonerName', (req, res) => {
  let name = req.params.summonerName;
  let newUrl = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}?api_key=${LEAGUE}`;

  fetch(newUrl)
  .then(res => res.json())
  .then(data => {
     res.send({ data });
  })
  .catch(err => {
     res.redirect('/error');
  });
})

app.get('/api/summonerInfo/:encryptedSummonerId', (req, res) => {
  let summonerId = req.params.encryptedSummonerId;
  let newUrl = `https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${LEAGUE}`;

  fetch(newUrl)
  .then(res => res.json())
  .then(data => {
     res.send({ data });
  })
  .catch(err => {
     res.redirect('/error');
  });
})

module.exports = app;