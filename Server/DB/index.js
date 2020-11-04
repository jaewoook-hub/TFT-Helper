const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/TFTHelper';

const db = mongoose.connect(mongoUri);

module.exports = db;