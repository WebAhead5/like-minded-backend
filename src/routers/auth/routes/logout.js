
const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")


exports.get = async (req, res) => {

    let {sid} = req.cookies;
    if(!sid)
        return serverRes.sendError(res, {message:`no cookie called "sid" was provided`})

    res.clearCookie("sid")

    try {
        await auth.endSession(sid)
        serverRes.sendData(res,{message:"successfully logged out"})
    } catch (e) {
        serverRes.sendError(res, {message:e.message})
    }



}