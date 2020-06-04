
const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")


exports.get = async (req, res) => {

    let {sid} = res;

    if(!sid)
        return serverRes.sendError(res, {message:`no cookie called "sid" was provided, or session could've expired`})

    res.clearCookie("sid")

    try {
        await auth.endSession(sid)
        serverRes.sendData(res,{message:"successfully logged out"})
    } catch (e) {
        serverRes.sendError(res, {message:"something went wrong on our end when trying to logout"})
    }



}