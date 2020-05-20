const express = require('express');
const app = express();
const router = require('./router')



app.use(router)
//app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/index.html")))



module.exports = app;