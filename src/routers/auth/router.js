const express = require('express');
const router = express.Router();
const login = require("./routes/login")
const logout = require("./routes/logout")
const currentUser  =require("./routes/currentUser");
const register  =require("./routes/register");
const deleteAccount  =require("./routes/deleteAccount");

router.post("/login",login.post);
router.get("/logout",logout.get);
router.post("/register",register.post);
router.get("/currentUser",currentUser.get);
router.get("/deleteAccount",deleteAccount.get);



module.exports = router