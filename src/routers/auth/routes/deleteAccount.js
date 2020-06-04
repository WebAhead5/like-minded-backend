
const serverRes = require("../../../tools/serverResponse")
const auth = require("../../../model/auth.model")



exports.get = async (req,res)=> {

    if (!res.userId)
        serverRes.sendError(res, {message: "login required"})

    try {
        await auth.deleteAccount(res.userId);
        res.clearCookie("sid")
        serverRes.sendData(res, {message: "account deletion successful"});

    } catch (e) {
        serverRes.sendError(res, {message: e.message})
    }
    res.clearCookie()

}