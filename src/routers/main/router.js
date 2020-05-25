const express = require('express');
const router = express.Router();
const homeRouter = require("./routes/home.js")
const {notFound,serverError} = require("./routes/errors")


router.get("/", homeRouter.get)
router.use(notFound)
router.use(serverError)




module.exports = router