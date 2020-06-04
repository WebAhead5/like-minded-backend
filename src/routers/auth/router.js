const express = require('express');
const router = express.Router();
const login = require("./routes/login")
const logout = require("./routes/logout")
const currentUser  =require("./routes/currentUser");

router.post("/login",login.post);
router.get("/logout",logout.get);
router.post("/register",register.post);
router.post("/currentUser",currentUser.get);



module.exports = router