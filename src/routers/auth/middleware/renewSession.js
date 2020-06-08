const { getSessionInfo } = require("../../../model/auth.model")
const dbConnection = require("../../../database/dbconnection");
const serverRes = require("../../../tools/serverResponse")

module.exports = async (req,res,next)=>{
    if(res.sid) {
        if(!process.env.SESSION_DURATION_MIN)
            return serverRes.sendError(res,{message: "server error, missing environment variable"})

        let sessionInfo = await getSessionInfo(res.sid)
        if(!sessionInfo.hasEnded)
            await dbConnection.query(`update sessions
                                      set expires = now() + $2 * interval '1 minutes'
                                      where id = $1`, [res.sid, process.env.SESSION_DURATION_MIN])
    }
    next();
}