
const serverRes = require("../../../tools/serverResponse")

module.exports = async ( req,res,next)=>{


    if(!req.sid)
       return  serverRes.sendError(res,"user must login first (or renew his session if expired ) in order to access this route")

    next()
}