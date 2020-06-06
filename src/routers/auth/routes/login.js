
const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")
const moment = require('moment');
const {noDuplicateObjectKeys} = require("../../../tools/modelsInputValidators");
const {checkObjectKeysPartOfArr} = require("../../../tools/modelsInputValidators");
const {requireObjectKeys} = require("../../../tools/modelsInputValidators");


exports.post = async (req,res)=>{

    requireObjectKeys(req.body, ["email","password"]);
    checkObjectKeysPartOfArr(req.body,["email","password"]);
    noDuplicateObjectKeys(req.body)

    let keys = Object.keys(req.body)
    let email = req.body[keys.filter(key=> key.toLowerCase() === "email")]
    let password = req.body[keys.filter(key=> key.toLowerCase() === "password")]


    try {
       let userId = await auth.validateCredentials(email, password)
        const {expires,sessionId} = await auth.createSession(userId, process.env.SESSION_DURATION_MIN )
        res.cookie("sid", sessionId,{expires:expires})
        serverRes.sendData(res,{message:"logged in successfully"})
    } catch (e) {
        serverRes.sendError(res,{message:e.message})

    }

}

