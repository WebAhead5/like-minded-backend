const userSettings = require("../../model/userSettings.model")
const express = require('express');
const serverResponse = require("../../tools/serverResponse")
const router = express.Router();

//TODO: VALIDATION NEEDS TO BE ADDED


// Get userSettings  with userId
router.get("/userSettings/:userId", async (req, res) => {
    // for example, we'll send a get request from the front end such as: localhost/userSettings/1
    // let profile = await userProfile.get(parseInt(req.params["profile_id"]))
    let userId = req.params["userId"]
    
    try{
    let settings = await userSettings.get(userId)
    serverResponse.sendData(res, { data: settings })
        
    }catch(error){
        serverResponse.sendError(res, { message: error.message })

    }
    
})

router.post("/userSettings/:userId", async (req, res) => {

    if (isNaN(req.params["userId"])) return serverResponse.sendError(res, { message: "Invalid params provided" })

    try {
        await userSettings.update(parseInt(req.params["userId"]), req.body)
        serverResponse.sendData(res, { message: "updated successfully" })
    } catch (error) {
        serverResponse.sendError(res, { message: error.message })
    }
})

module.exports = router;