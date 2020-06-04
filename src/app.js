
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser")



const mainRouter = require('./routers/main/router')
const usersRouter = require('./routers/userProfile/router')
const relationshipRouter = require('./routers/relationships/router')
const messagesRouter = require('./routers/messages/router')
const authRouter = require('./routers/auth/router')
const loadLoggedInUserId = require('./routers/auth/middleware/loadLoggedInUserId')


app.use(cookieParser())
app.use(express.json())

app.use(loadLoggedInUserId)

app.use(authRouter)
app.use(usersRouter)
app.use(relationshipRouter)
app.use(mainRouter)
app.use(messagesRouter)
//app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/index.html")))



module.exports = app;