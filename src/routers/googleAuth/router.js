const express = require('express');
const router = express.Router();
const envCheck = require("../../tools/envCheck");

const passport =  require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const googleClientID = envCheck.inProduction? process.env.GOOGLE_CLIENT_ID: process.env.DEV_GOOGLE_CLIENT_ID;
const googleClientSecret = envCheck.inProduction? process.env.GOOGLE_SECRET: process.env.DEV_GOOGLE_SECRET;

router.use(passport.initialize())
passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: "/auth/google/callback"
},
(accessToken,refreshToken, profile,done)=>{

    console.log(profile)
     return done(null,profile)

}));

router.get("/google",
    passport.authenticate("google",{
        scope: ["profile","email"]
    })

)

router.get("/google/callback",
     passport.authenticate("google",{session: false }),
    (req,res)=> res.redirect("/auth/google/successful")
)


module.exports = router