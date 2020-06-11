const express = require('express');
const router = express.Router();
const {blockedFromLoggedInUsers,requireUserToLogin} = require("./middleware/requireUserToLogin")


const login = require("./routes/login")
const logout = require("./routes/logout")
const currentUser  =require("./routes/currentUser");
const register  =require("./routes/register");
const deleteAccount  =require("./routes/deleteAccount");
const isLoggedIn  =require("./routes/isLoggedIn");


router.post("/login",blockedFromLoggedInUsers,login.post);
router.all("/logout",requireUserToLogin,logout.get);
router.post("/register",blockedFromLoggedInUsers,register.post);
router.get("/currentUser",requireUserToLogin,currentUser.get);
router.post("/deleteAccount",requireUserToLogin,deleteAccount.get);
router.post("/isLoggedIn.js", isLoggedIn);


module.exports = router