
const auth = require("../../../model/auth.model");
const serverRes = require("../../../tools/serverResponse")

module.exports = async ( req,res,next)=>{

    let {sid} = req.cookies

    //if the cookie was not provided / user not logged in
    if(!sid)
        return next()

    //load data from cookies
    try {
        let sessionInfo = await auth.getSessionInfo(sid)
        if(!sessionInfo.hasEnded)
        {
            res.userId = sessionInfo.userId;
            res.userid = sessionInfo.userId;
            res.sessionId = sid;
            res.sessionid = sid;
            res.sid = sid;
        }

    } catch (e) {
       // return  serverRes.sendError(res,{message:e.message})

    }

    next();


}