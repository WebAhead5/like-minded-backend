
const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")
const bcrypt = require("bcrypt")

exports.post = async (req,res)=> {


    try {

        //validate credentials
        let userId = await auth.validateCredentials(req.body,(pass1,pass2)=> bcrypt.compareSync(pass1, pass2))

        //create a session for the user
        const {expires, sessionId} = await auth.createSession(userId, process.env.SESSION_DURATION_MIN)

        //store the session id in a cookie
        res.cookie("sid", sessionId, {expires: expires,signed:true})

        //return a "successful" message
        serverRes.sendData(res, {message: "logged in successfully"})
    } catch (e) {
        serverRes.sendError(res, {message: e.message})

    }

}

