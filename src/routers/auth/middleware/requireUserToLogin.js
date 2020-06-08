
const serverRes = require("../../../tools/serverResponse")

exports.requireUserToLogin = async ( req,res,next)=>{


    if(!res.sid)
       return  serverRes.sendError(res,{message:"user must login first in order to precede"})

    next()
}
exports.blockedFromLoggedInUsers = async ( req,res,next)=>{


    if(res.sid)
        return  serverRes.sendError(res, {message:"user cannot access this route while logged in"})

    next()
}