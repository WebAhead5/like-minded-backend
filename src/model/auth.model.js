const dbConnection = require("../database/dbconnection");
const userProfile = require("./userProfile.model");
const userSettings = require("./userProfile.model");

exports.validateCredentials = async ( email, password ) => {

    let res = await dbConnection.query("select * from auth where email = $2 ", [email])

    if (res.rowCount !== 1)
        return {
            isValid: false,
            isvalid: false,
            message: "user not found"
        }
    res = await dbConnection.query("select * from auth where password = $1 and email = $2 ", [password, email])

    if (res.rowCount !== 1)
        return {
            isValid: false,
            isvalid: false,
            message: "incorrect password"
        }

    return {
        userId : res.rows[0].id,
        userid : res.rows[0].id,
        isValid: true,
        isvalid: true,
        userId: res.rows[0].userid,
        userid: res.rows[0].userid,
    }

}

exports.createSession = async (userId, durationInMinutes)=>{

    checkUserIdType(userId)
    await checkUserExists(userId)

    let res = await dbConnection.query(`insert into sessions ("userId", "expires") values ($1,now() + $2 * interval '1 minutes') RETURNING *`,[userId,durationInMinutes])

    return res.rows[0]


}

exports.endSession = async (sessionId)=>{

    await dbConnection.query(`update sessions set "hasLoggedOut" = true where id = $1`,[sessionId])

}

exports.extendSession = async (sessionId, durationInMinutes)=>{

    await dbConnection.query(`update sessions set "expires" = "expires" + $2 *  interval '1 minutes'   where id = $1`,[sessionId,durationInMinutes])


}

exports.clearExpiredSession= async  ()=>{

    await dbConnection.query(`delete from sessions where expires >= now()`)

}


exports.getSessionInfo = async ( sessionId ) => {

    await dbConnection.query(`select "userId",
                                     expires,
                                     "hasLoggedOut"                    as "loggedOut",
                                     now() > expires                   as "hasExpired",
                                     now() > expires OR "hasLoggedOut" as "hasEnded"
                              from sessions 
                              where id = $1`, [sessionId])

}


function checkUserIdType(userId) {
    if(isNaN(userId))
        throw new Error("invalid userId provided")
}



async function checkUserExists(userId) {

    let res = await dbConnection.query("select * from auth where id = $1 ", [userId] )
    if(res.rowCount !== 1)
        throw new Error("no user exists with userId " + userId)

}





