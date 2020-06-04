const userProfile = require("../../model/userProfile.model")
const express = require('express');
const serverResponse = require("../../tools/serverResponse")
const router = express.Router();

//TODO: VALIDATION NEEDS TO BE ADDED


// Get user profile with userId
router.get("/userProfile/:profile_id", async (req, res) => {
    console.log(req.params["profile_id"]);
    let profile = await userProfile.get(parseInt(req.params["profile_id"]))
    serverResponse.sendData(res, { data: profile })
})

// Set new profile information
router.post("/userProfile/:profile_id", async (req, res) => {
    if (isNaN(req.params["profile_id"])) return serverResponse.sendError(res, { message: "Invalid params provided" })
    try {
        let integer = parseInt(req.params["profile_id"]);
        await userProfile.update(parseInt(req.params["profile_id"]), req.body)
        serverResponse.sendData(res, { message: "user info updated successfully" })
    } catch (error) {
        serverResponse.sendError(res, { message: error.message })
    }
})

// Delete profile
router.delete('/userProfile/:profile_id', async (req, res) => {
    try {
        await userProfile.delete(req.params["profile_id"]);
        serverResponse.sendData(res, { message: "user deleted successfully" })
    } catch (error) {
        serverResponse.sendError(res, { message: error.message })
    }
})

// Set new profile information
router.post("/userProfile/:profile_id", async (req, res) => {
    if (isNaN(req.params["profile_id"])) return serverResponse.sendError(res, { message: "Invalid params provided" })
    try {
        let profileIdInteger = parseInt(req.params["profile_id"]);
        let {userId, firstName, lastName , gender, status, bio, primaryPhoto } = req.body
        await userProfile.update(userId, firstName, lastName , gender, status, bio, primaryPhoto)
        serverResponse.sendData(res, { message: "user added successfully" })
    } catch (error) {
        serverResponse.sendError(res, { message: error.message })
    }
})

module.exports = router;