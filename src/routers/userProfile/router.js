const userProfile = require("../../model/userProfile.model")
const express = require('express');
const serverResponse = require("../../tools/serverResponse")
const router = express.Router();



// Get user profile with userId
router.get("/userProfile/:profile_id", async (req, res) => {
    try {
        let profile = await userProfile.get(parseInt(req.params["profile_id"]))
        serverResponse.sendData(res, { data: profile})
    } catch (error) {
        serverResponse.sendError(res, { message: error.message })
    }
})

// Set new profile information
router.post("/userProfile", async (req, res) => {

    let {userId} = res;
    if(!userId)
        return serverResponse.sendError(res, { message: "user must log in first" })


    try {
        await userProfile.update(userId, req.body)
        serverResponse.sendData(res, { message: "updated successfully" })
    } catch (error) {
        serverResponse.sendError(res, { message: error.message })
    }

})



module.exports = router;