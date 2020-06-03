const express = require('express');
const router = express.Router();
const login = require("./routes/login")
const logout = require("./routes/logout")


router.post("/login",login.post);
router.get("/logout",logout.get);
module.exports = router