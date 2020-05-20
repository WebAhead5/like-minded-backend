const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon')

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/index.html")))

require('dotenv').config();

module.exports = app;