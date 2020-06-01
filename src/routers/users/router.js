const userProfile = require("../../model/userProfile.model")
const express = require('express');
const router = express.Router();

//TODO: VALIDATION NEEDS TO BE ADDED


// Get user profile with userId
router.get("/userProfile/:profile_id",async (req, res)=>{
    console.log(req.params["profile_id"]);
    
    let profile = await userProfile.get(parseInt(req.params["profile_id"]))
    res.json({status:200 , data: profile})
})

router.post("/userProfile/:profile_id",async (req, res)=>{
    let profile = await userProfile.update(parseInt(req.params["profile_id"]), req.body)
    res.json({status:200 , data: profile})
})

module.exports =  router;