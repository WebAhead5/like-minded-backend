const db = require('../database/dbconnection')
const userProfileModel = require('../model/userProfile.model')
const relationshipsModel = require('../model/relationships.model')
const validators = require("../tools/modelsInputValidators")

// Get all messages between userId and otherUserId
exports.getChat = async (userId, otherUserId, fields) => {
    //validate inputs
    validators.checkUserIdType(userId)
    validators.checkUserIdType(otherUserId)
    await validators.checkUserExists(userId)
    await validators.checkUserExists(otherUserId)
    validators.checkObjectKeysPartOfArr(fields, ["count", "offset"])

    //validate if is a match
    let relationship = await relationshipsModel.getRelationshipStatusBetween(userId, otherUserId);
    if(!relationship.isMatch)
        throw new Error("unauthorized - both users need to match in order to precede")

    //get variables - case insensitive
    let count, offset;

    if (fields) {
        let keys = Object.keys(fields);

        if(keys.some(key=> key.toLowerCase() === "count"))
            count = fields[keys.filter(key=> key.toLowerCase() === "count")[0]] ;

        if(keys.some(key=> key.toLowerCase() === "offset"))
            offset = fields[keys.filter(key=> key.toLowerCase() === "offset")[0]];
    }

   //retrieve data from database
    let arr = [userId, otherUserId];
    let sql = `SELECT "senderUserId" as "senderId",
                      "senderUserId",
                      "timeAndDate",
                      "recipUserId" as "recipId",
                      "recipUserId",
                       message,
                       message as content,
                       "id",
                        id as "messageId"
               FROM messages
               WHERE ("senderUserId" = $1 AND "recipUserId" = $2)
                  OR ("senderUserId" = $2 AND "recipUserId" = $1)
               ORDER by "timeAndDate" DESC`;


    if (count !== undefined) {
        sql += ` LIMIT $3 `
        arr.push(count)
        if (offset !== undefined) {
            sql += `  OFFSET $4 `
            arr.push(offset)
        }
    }

    let result = await db.query(sql, arr)

    return result.rows;
}

// get chats between user and all matches, and retrieve most recent message
exports.getAllChatsWith = async (userId) => {

    //validate input
    validators.checkUserIdType(userId)
    await validators.checkUserExists(userId)


    //get all matches
    let allMatchesWithUser = await relationshipsModel.getAllMatchesWith(userId);
    let array = [];

    //get chats
    for (let match of allMatchesWithUser) {
       let lastMessage =await exports.getChat(userId,match.profile.userid,{count:1})
        array.push(
            {
                profile: match.profile,
                lastMessage:  lastMessage.length ? lastMessage[0].message: null ,
                lastMessageData: lastMessage.length? lastMessage[0]: null
            }
        )
    }
    return array;

}

// Add messages when provided "senderUserId", "recipUserId", "message","timeAndDate"
exports.add = async (userId, recipUserId, fields) => {

    //validate input
    validators.checkUserIdType(userId)
    validators.checkUserIdType(recipUserId)
    await validators.checkUserExists(userId)
    await validators.checkUserExists(recipUserId)
    validators.checkObjectKeysPartOfArr(fields,["message"])
    validators.requireObjectKeys(fields,["message"])

    //get message content - case insensitive
   let message =  fields[Object.keys(fields).filter(key=> key.toLowerCase() === "message")[0]]

    //validate message content
    if(!message)
        throw new Error("message content cannot be null");

    //validate if is a match
    let relationship = await relationshipsModel.getRelationshipStatusBetween(userId, recipUserId);
    if(!relationship.isMatch)
        throw new Error("unauthorized - both users need to match in order to precede")

    //insert message
    await  db.query(`INSERT INTO messages("senderUserId", "recipUserId", "message") VALUES ($1,$2,$3)`, [userId, recipUserId, message ])

}

// delete  message by messageid 
exports.delete = async (messageId) => {


    await db.query(`DELETE
                    FROM messages
                    WHERE id = $1`, [messageId])

}

// retrieve message info
exports.getMessageData = async (messageId) => {


    let res = await db.query(`SELECT "senderUserId" as "senderId",
                                     "senderUserId",
                                     "timeAndDate",
                                     "recipUserId"  as "recipId",
                                     "recipUserId"
                                     message,
                                     message        as content,
                                     id,
                                     id             as "messageId"
                              FROM messages
                              WHERE id = $1`, [messageId]);

    if (res.rowCount === 1)
        return res.rows[0];

    throw new Error("not found")
}

