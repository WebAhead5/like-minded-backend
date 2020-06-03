
const express = require('express');
const app = express();
const mainRouter = require('./routers/main/router')
const usersRouter = require('./routers/userProfile/router')
const relationshipRouter = require('./routers/relationships/router')
const messagesRouter = require('./routers/messages/router')
const settingsRouter = require('./routers/settings/router')

app.use(express.json())


app.use(usersRouter)
app.use(relationshipRouter)
app.use(messagesRouter)
app.use(settingsRouter)
app.use(mainRouter)

//app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/index.html")))



module.exports = app;