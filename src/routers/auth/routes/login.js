
const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")
const moment = require('moment');


exports.post = async (req,res)=>{
    const {email , password} = req.body;

    try {
       let userId = await auth.validateCredentials(email, password)
        const sessionRow = await auth.createSession(userId, process.env.SESSION_DURATION_MIN )
        res.cookie("sid", sessionRow.id,{expires:moment(sessionRow.expires).toDate()})
        serverRes.sendData(res,{message:"logged in successfully"})
    } catch (e) {
        serverRes.sendError(res,{message:e.message})

    }

}

