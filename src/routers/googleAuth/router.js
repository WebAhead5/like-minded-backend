const express = require('express');
const router = express.Router();
const envCheck = require("../../tools/envCheck");

const passport =  require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const googleClientID = envCheck.inProduction? process.env.GOOGLE_CLIENT_ID: process.env.DEV_GOOGLE_CLIENT_ID;
const googleClientSecret = envCheck.inProduction? process.env.GOOGLE_SECRET: process.env.DEV_GOOGLE_SECRET;

const googleAuth = require("../../model/googleAuth.model")
const auth = require("../../model/auth.model")
const serverRes = require("../../tools/serverResponse")
const {blockedFromLoggedInUsers} = require("../auth/middleware/requireUserToLogin")


router.use(passport.initialize())
passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: "/auth/google/callback",
},
(accessToken,refreshToken, profile,done)=>{

done(null, profile)

}));
//
// const cors = require('cors');
//
// app.use('*', function(req, res, next) {
// //replace localhost:8080 to the ip address:port of your server
// //     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Credentials', true);
//     next();
// });
//
// //enable pre-flight
// app.options('*', cors());


router.get("/",blockedFromLoggedInUsers,
    passport.authenticate("google",{
        scope: ["profile","email"]
    })

)

router.get("/callback",
    async (req,res,next)=> {

        passport.authenticate("google",{
            session: false }, (error, profile)=>{

            googleAuth.login(profile).then(userId=>{
                auth.createSession(userId, process.env.SESSION_DURATION_MIN)
                    .then(( {expires, sessionId})=>{

                        res.cookie("sid", sessionId, {expires: expires,signed:true})
                        res.redirect("/auth/google/successful")

                    }).catch(e=>res.redirect("/auth/google/unsuccessful"))

            }).catch(e=>res.redirect("/auth/google/unsuccessful"))


        })(req,res,next)



    }
)


module.exports = router