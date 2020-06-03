const express = require('express');
const router = express.Router();
const login = require("./routes/login")


router.post("/login",login.post);
module.exports = router