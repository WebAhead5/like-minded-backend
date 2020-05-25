const express = require('express');
const app = express();
const mainRouter = require('./routers/main/router')



app.use(mainRouter)
//app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/index.html")))



module.exports = app;