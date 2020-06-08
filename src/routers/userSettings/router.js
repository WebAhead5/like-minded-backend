const userSettings = require("../../model/userSettings.model")
const express = require('express');
const serverResponse = require("../../tools/serverResponse")
const router = express.Router();


// Get userSettings  with userId
router.get("/:userId", async (req, res) => {
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

router.post("/", async (req, res) => {

    let {userId} = res
    if(!userId)
        return serverResponse.sendError(res, { message: "user must log in first" })


    try {
        await userSettings.update(userId, req.body)
        serverResponse.sendData(res, { message: "updated successfully" })
    } catch (error) {
        serverResponse.sendError(res, { message: error.message })
    }


})

module.exports = router;