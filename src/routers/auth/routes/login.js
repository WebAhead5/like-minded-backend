
const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")
const {noDuplicateObjectKeys} = require("../../../tools/modelsInputValidators");
const {checkObjectKeysPartOfArr} = require("../../../tools/modelsInputValidators");
const {requireObjectKeys} = require("../../../tools/modelsInputValidators");


exports.post = async (req,res)=> {

    //validate and limit body fields
    requireObjectKeys(req.body, ["email", "password"]);
    checkObjectKeysPartOfArr(req.body, ["email", "password"]);
    noDuplicateObjectKeys(req.body)


    //make field keys case insensitive
    let keys = Object.keys(req.body)
    let email = req.body[keys.filter(key => key.toLowerCase() === "email")]
    let password = req.body[keys.filter(key => key.toLowerCase() === "password")]


    try {
        //validate credentials
        let userId = await auth.validateCredentials(email, password)

        //create a session for the user
        const {expires, sessionId} = await auth.createSession(userId, process.env.SESSION_DURATION_MIN)

        //store the session id in a cookie
        res.cookie("sid", sessionId, {expires: expires})

        //return a "successful" message
        serverRes.sendData(res, {message: "logged in successfully"})
    } catch (e) {
        serverRes.sendError(res, {message: e.message})

    }

}

