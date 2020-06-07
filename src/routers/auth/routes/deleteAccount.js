
const serverRes = require("../../../tools/serverResponse")
const auth = require("../../../model/auth.model")



exports.get = async (req,res)=> {

    if (!res.userId)
        serverRes.sendError(res, {message: "login required in order to precede"})

    try {
        await auth.deleteAccount(res.sessionId);
        serverRes.sendData(res, {message: "account deletion successful"});

    } catch (e) {
        serverRes.sendError(res, {message: e.message})
    }
    res.clearCookie("sid")

}