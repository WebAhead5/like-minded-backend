const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")


exports.get = async (req,res)=>
{



    try {
        let result =  await auth.getUserInfo(req.sessionId)
        serverRes.sendData(res,result)
    }
    catch (e) {
        serverRes.sendError(req,{message: e.message})
    }




}