const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.json());
const path = require('path');

app.use(express.static(path.join(__dirname, '/../dist')));



module.exports = app;