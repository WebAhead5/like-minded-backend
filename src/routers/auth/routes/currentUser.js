const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")


exports.get = async (req,res)=>
{
    if (!res.sessionId)
        return serverRes.sendError(res, {message: "login required in order to precede"})
    try {
        let result =  await auth.getUserInfo(res.sessionId)
        serverRes.sendData(res, {data:result})
    }
    catch (e) {
        serverRes.sendError(res,{message: e.message})
    }
}