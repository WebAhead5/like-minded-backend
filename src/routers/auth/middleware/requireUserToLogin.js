
const serverRes = require("../../../tools/serverResponse")
const envtools = require('../../../tools/envCheck')

exports.requireUserToLogin = async ( req,res,next)=>{

    if(!envtools.inProduction) return next()

    if(!res.sid)
       return  serverRes.sendError(res,{message:"user must login first in order to precede"})

    next()
}
exports.blockedFromLoggedInUsers = async ( req,res,next)=>{

    if(!envtools.inProduction) return next()

    if(res.sid)
        return  serverRes.sendError(res, {message:"user cannot access this route while logged in"})

    next()
}