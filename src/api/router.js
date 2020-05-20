const express = require('express');
const router = express.Router();
const homeRouter = require("./routes/home.js")
const rout404 = require("./routes/404")
const rout500 = require("./routes/500")


router.get("/", homeRouter.get)
router.use(rout404)
router.use(rout500)




module.exports = router