
const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")


exports.get = async (req, res) => {

    let {sid} = req.cookies;
    res.clearCookie("sid")
    if(!sid)
        serverRes.sendError(res, {message:`no cookie called "sid" was provided`})
    try {
        await auth.endSession(sid)
        serverRes.sendData(res,{message:"successfully logged out"})
    } catch (e) {
        serverRes.sendError(res, {message:e.message})
    }



}