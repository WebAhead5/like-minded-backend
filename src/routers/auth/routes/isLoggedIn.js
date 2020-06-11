const auth = require("../../../model/auth.model")
const serverRes = require("../../../tools/serverResponse")


exports.get = async (req,res)=> {

    serverRes.sendData(res, {data: res.sessionId !== undefined})

}