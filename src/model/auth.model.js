
const dbConnection = require("../database/dbconnection");
const {checkEmailStructure,checkUserExists,checkUserIdType} = require("./validators")
const userProfile = require("./userProfile.model");
const userSettings = require("./userProfile.model");

exports.validateCredentials = async ( email, password ) => {

    if(!email)
        throw new Error("email was not provided");

    checkEmailStructure(email)


    if(!password)
        throw new Error("incorrect password")


    //TODO: check password strength

    let res = await dbConnection.query("select * from auth where email = $1 ", [email])

    if (res.rowCount !== 1)
        throw new Error("no user is registered under the provided email")

    res = await dbConnection.query("select * from auth where password = $1 and email = $2 ", [password, email])

    if (res.rowCount !== 1)
        throw new Error("incorrect credentials")

    return res.rows[0].id;

}
exports.createSession = async (userId, durationInMinutes)=>{

    if(isNaN(durationInMinutes))
        throw new Error("session duration is invalid")
    checkUserIdType(userId)
    checkUserExists(userId)

    let res = await dbConnection.query(`insert into sessions ("userId", expires) values ($1,now() + $2 * interval '1 minutes') RETURNING *`,[userId,durationInMinutes])

    return res.rows[0]


}
exports.endSession = async (sessionId)=>{

    let sessionInfo = await this.getSessionInfo(sessionId)

    if(sessionInfo.hasEnded)
        throw new Error("session has already been expired/ended")

    await dbConnection.query(`update sessions set "hasLoggedOut" = true where id = $1`,[sessionId])

}
exports.extendSession = async (sessionId, durationInMinutes)=>{

    //TODO: extend session cookie expiration date
    if(isNaN(durationInMinutes))
        throw new Error("session duration is invalid")

    let sessionInfo = await this.getSessionInfo(sessionId)

    if(sessionInfo.hasEnded)
        throw new Error("session has expired, it cannot be extended.")

    let res = await dbConnection.query(`update sessions set "expires" = "expires" + $2 *  interval '1 minutes'   where id = $1`,[sessionId,durationInMinutes])

    return res.rows[0]


}
exports.clearExpiredSession= async  ()=>{

    await dbConnection.query(`delete from sessions where expires >= now()`)

}
exports.getSessionInfo = async ( sessionId ) => {

    let sessionInfo =await dbConnection.query(`select "userId",
                                     expires,
                                     "hasLoggedOut"                    as "loggedOut",
                                     now() > expires                   as "hasExpired",
                                     now() > expires OR "hasLoggedOut" as "hasEnded"
                              from sessions 
                              where id = $1`, [sessionId])

    if(!sessionInfo.rowCount)
        throw new Error("no session found under the provided session id, session could've expired and and deleted.")

    return sessionInfo.rows[0];
}
exports.deleteAccount = async (userId) =>{

    await  dbConnection.query(` 
    
    delete from userprofile where userid = ${userId};
    delete from usersettings where userid = ${userId};
    delete from auth where id = ${userId};
    delete from useranswers where userid = ${userId};
    delete from userRelationship where "userId1" = ${userId} or "userId2" = ${userId};
    delete from messages where "senderUserId" = ${userId} or "senderUserId" = ${userId};
    delete from sessions where "userId" = ${userId};
     `)



}


exports.currentUser = async (sessionID)=>{
    //TODO: implement after the userProfile and userSettings queries are available

}


exports.getUserInfo = async ( sessionId ) =>{
    //TODO: implement after the userProfile and userSettings queries are available
}



