const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const ChampionSchema = new mongoose.Schema({
  name: String,
  championId: String,
  cost: Number,
  traits: [String],
})

const ItemSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  description: String,
})

const Champions = mongoose.model('Champions', ChampionSchema);

const Items = mongoose.model('Items', ItemSchema);

module.exports = {Champions, Items};