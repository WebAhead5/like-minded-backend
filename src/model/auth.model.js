
const dbConnection = require("../database/dbconnection");
const {checkEmailStructure,checkUserExists,checkUserIdType} = require("../tools/modelsInputValidators")
const userProfileModel = require("./userProfile.model");
const userSettingsModel = require("./userSettings.model");
const {noDuplicateObjectKeys} = require("../tools/modelsInputValidators");
const {checkObjectKeysPartOfArr} = require("../tools/modelsInputValidators");
const {requireObjectKeys} = require("../tools/modelsInputValidators");

exports.getSessionInfo = async ( sessionId ) => {

    if(sessionId === undefined)
        throw new Error("no session id was provided")


    let sessionInfo =await dbConnection.query(`select "userId",
                                     expires,
                                     "hasLoggedOut"                    as "loggedOut",
                                     now() > expires                   as "hasExpired",
                                     now() > expires OR "hasLoggedOut" as "hasEnded"
                              from sessions 
                              where id = $1`, [sessionId])

    if(!sessionInfo.rowCount)
        throw new Error("no session found, session could've expired and deleted.")

    return sessionInfo.rows[0];
}

exports.validateCredentials = async ( fields ) => {

    //validate and limit body fields
    requireObjectKeys(fields, ["email", "password"]);
    checkObjectKeysPartOfArr(fields, ["email", "password"]);
    noDuplicateObjectKeys(fields)


    //make field keys case insensitive + change email to lower case
    let keys = Object.keys(fields)
    let email = fields[keys.filter(key => key.toLowerCase() === "email")].toLowerCase()
    let password = fields[keys.filter(key => key.toLowerCase() === "password")]



    checkEmailStructure(email)

    //TODO: check password strength


    //check if email exists
    let res = await dbConnection.query("select * from auth where email = $1 ", [email])

    if (res.rowCount !== 1)
        throw new Error("no user is registered under the provided email")


    //validate credentials
    res = await dbConnection.query("select * from auth where password = $1 and email = $2 ", [password, email])

    if (res.rowCount !== 1)
        throw new Error("incorrect credentials")


    //return user id
    return res.rows[0].id;

}
exports.createSession = async (userId, durationInMinutes)=>{

    if(isNaN(durationInMinutes))
        throw new Error("session duration is invalid")

    checkUserIdType(userId)
    await checkUserExists(userId)

    let res = await dbConnection.query(`insert into sessions ("userId", expires) values ($1,now() + $2 * interval '1 minutes') RETURNING *`,[userId,durationInMinutes])

    return {
        id: res.rows[0].id,
        sessionId : res.rows[0].id,
        expires: res.rows[0].expires
    }


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
exports.getUserInfo = async ( sessionId ) =>{
    //TODO: implement after the userProfile and userSettings queries are available
    if(sessionId === undefined)
        throw new Error("sessionId required in order to precede - user must log in first")

   let sessionInfo =  await exports.getSessionInfo(sessionId)

    if(sessionInfo.hasEnded)
        throw new Error("session has expired - user must be logged in in order precede")


    return {
        userId: sessionInfo.userId,
        userid: sessionInfo.userId,
        profile:  await userProfileModel.get(sessionInfo.userId),
        settings: await userSettingsModel.get(sessionInfo.userId),

    }


}

exports.deleteAccount = async (sessionID) =>{

    //get session info
    let sessionInfo = await this.getSessionInfo(sessionID)

    //check of session has ended
    if(sessionInfo.hasEnded)
        throw new Error("session has expired - user must be logged in in order precede")

    //get the user id from the session data
    let {userId} = sessionInfo;

    //check if the user still exists ( in case the user is deleted and the session still exists )
    await checkUserExists(userId)

    //delete the user data from all the tables
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


exports.register=async (fields)=>{

    requireObjectKeys(fields, ["email","password", "firstName", "lastName","gender"]);
    checkObjectKeysPartOfArr(fields,["email","password", "firstName", "lastName","gender"]);
    noDuplicateObjectKeys(fields)

    let keys = Object.keys(fields)
    let email = fields[keys.filter(key=> key.toLowerCase() === "email")].toLowerCase()
    let password = fields[keys.filter(key=> key.toLowerCase() === "password")]
    let firstName = fields[keys.filter(key=> key.toLowerCase() === "firstname")].toLowerCase()
    let lastName = fields[keys.filter(key=> key.toLowerCase() === "lastname")].toLowerCase()
    let gender = fields[keys.filter(key=> key.toLowerCase() === "gender")]

    checkEmailStructure(email)
    //TODO: check password strength


    //check if email is in use
    let {rowCount} =await dbConnection.query(`select * from auth where email = $1`, [email]);
    if(rowCount !== 0)
        throw new Error("email already in use")

    //add a user and retrieve it's id
    let userId =await dbConnection.query(`insert into auth (email, password) values ($1,$2) returning id`, [email,password]);
    userId = userId.rows[0].id

    //create a user profile and user settings entries
    try {
        await userProfileModel.add({userId, firstName, lastName, gender});
        await userSettingsModel.add({userId});
    } catch (e) {
        await dbConnection.query(`delete from auth where id = $1`,[userId]);
        throw e;
    }

    //return the newly added user id
    return userId;
}

