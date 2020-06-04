
const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")


exports.post = async  (req,res)=>
{

    try {
        let userId = await auth.register(req.body)
        const sessionRow = await auth.createSession(userId, process.env.SESSION_DURATION_MIN )
        res.cookie("sid", sessionRow.id,{expires:moment(sessionRow.expires).toDate()})
        serverRes.sendData(res,{message:"registered and logged in successfully"})
    }
    catch (e) {
        serverRes.sendError(req,{message: e.message})
    }

}