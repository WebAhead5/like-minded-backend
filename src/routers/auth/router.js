const express = require('express');
const router = express.Router();
const {blockedFromLoggedInUsers,requireUserToLogin} = require("./middleware/requireUserToLogin")


const login = require("./routes/login")
const logout = require("./routes/logout")
const currentUser  =require("./routes/currentUser");
const register  =require("./routes/register");
const deleteAccount  =require("./routes/deleteAccount");


router.post("/login",blockedFromLoggedInUsers,login.post);
router.all("/logout",requireUserToLogin,logout.get);
router.post("/register",blockedFromLoggedInUsers,register.post);
router.get("/currentUser",requireUserToLogin,currentUser.get);
router.post("/deleteAccount",requireUserToLogin,deleteAccount.get);



module.exports = router