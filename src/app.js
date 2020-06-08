
//require express and app
const express = require('express');
const app = express();


//require middleware
const homeRouter = require("./routers/main/routes/home.js")
const {notFound,serverError} = require("./routers/main/routes/errors")
const loadLoggedInUserId = require('./routers/auth/middleware/loadLoggedInUserId')
const renewSessions = require('./routers/auth/middleware/renewSession')
const cookieParser = require("cookie-parser")
const favicon  = require("serve-favicon")
const path = require('path')
const helmet = require("helmet")
const {requireUserToLogin} = require("./routers/auth/middleware/requireUserToLogin")

//require routers
const usersRouter = require('./routers/userProfile/router')
const relationshipRouter = require('./routers/relationships/router')
const messagesRouter = require('./routers/messages/router')
const settingsRouter = require('./routers/userSettings/router')
const authRouter = require('./routers/auth/router')
const googleAuthRouter = require('./routers/googleAuth/router')
const csurfRouter = require('./routers/csurf/router')



//use middleware
if(!process.env.COOKIE_SECRET)
    throw new Error("cookie secret must be provided");
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.json())
app.use(helmet())
app.use(favicon(path.join(__dirname,"..","public","favicon.ico")))
app.use(loadLoggedInUserId)
app.use(renewSessions)



//use routers
app.use("/auth", authRouter)
app.use("/auth", googleAuthRouter)
app.use(requireUserToLogin, usersRouter)
app.use(csurfRouter)
app.use(requireUserToLogin, relationshipRouter)
app.use(requireUserToLogin, messagesRouter)
app.use(requireUserToLogin, settingsRouter)



//use main routes
app.get("/", homeRouter.get)
app.use(serverError)
app.use(notFound)



module.exports = app;

