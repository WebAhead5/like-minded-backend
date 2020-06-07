const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")
const bcrypt = require("bcrypt")


exports.post = async  (req,res)=>
{

    //TODO: redirect the user he's logged in
    try {
        //hash password
        let passwordKeys = Object.keys(req.body).filter(key => key.toLowerCase() === "password")

        if(!process.env.HASH_SOLT_ROUNDS)
            serverRes.sendError(res, {message:"SERVER ERROR - hashing passwords env variable is missing", status: 500})

        if(passwordKeys.length !== 0)
            req.body[passwordKeys[0]] = await bcrypt.hash(req.body[passwordKeys[0]],parseInt(process.env.HASH_SOLT_ROUNDS))


        //register user
        let userId = await auth.register(req.body)

        //create session, TODO: replace it with sending an email to the user to validate his email
        const {expires, sessionId} = await auth.createSession(userId, process.env.SESSION_DURATION_MIN)

        //store the session id in a cookie
        res.cookie("sid", sessionId, {expires: expires})

        //return a "successful" message
        serverRes.sendData(res,{message:"registered and logged in successfully"})
    }
    catch (e) {
        serverRes.sendError(res,{message: e.message})
    }

}