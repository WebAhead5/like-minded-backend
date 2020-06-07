const express = require('express');
const router = express.Router();
const serverRes = require("../../tools/serverResponse")
const csrf = require("csurf")
const csrfProtection = csrf({ cookie: true })


router.get("/csurfToken",(req,res,next)=>{
      req.cookies._csrf = "";
      next();
    }
    ,csrfProtection ,(req, res) => {

    serverRes.sendData(res,{data:{ csrfToken: req.csrfToken() }})

})




module.exports = router;