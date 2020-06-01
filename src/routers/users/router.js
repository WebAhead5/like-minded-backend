const userProfile = require("../../model/userProfile.model")
const express = require('express');
const router = express.Router();

router.get("/userProfile/:profile_id",async (req, res)=>{
    let profile = await userProfile.get(parseInt(req.params["profile_id"]))


})

router.post("/userProfile/:profile_id",async (req, res)=>{
    let profile = await userProfile.update(parseInt(req.params["profile_id"]), req.body)
    res.json({status:200 , data: profile})

})



module.exports =  router;