const db = require('../database/dbconnection')
const userProfileModel = require('../model/userProfile.model')
const relationshipsModel = require('../model/relationships.model')

// Get all messages between userId and otherUserId
exports.getChat = async (userId, otherUserId, { count, offset }) => {
    let result;
    let arr = [userId,otherUserId];
    let sql = `SELECT * FROM messages WHERE "senderUserId" = $1 AND "recipUserId" = $2 OR "senderUserId" = $2 AND "recipUserId" = $1 ORDER by "timeAndDate" DESC`;
    if (count !== undefined) {
        sql += ` LIMIT "count" = $3 `
        arr.push(count)
        if (offset !== undefined)
           { 
               sql += `  OFFSET "offset" = $4 `
               arr.push(offset)
            }
    }
    try {
        result = await db.query(sql, arr)

    } catch (error) {
        console.error(error);
        throw error;
    }
    if (result.rows.length === 0)
        throw new Error("user not found")
    return result.rows;
}

// get chats between user and all matches, and retrieve most recent message
exports.getAllChatsWith = async (userId) => {

    let result;
    try {
        let allMatchesWithUser = await relationshipsModel.getAllMatchesWith(userId);
        let array = [];
        for (match of allMatchesWithUser) {
           let lastMessage = await db.query(`SELECT * FROM messages WHERE "senderUserId" = $1 AND "recipUserId" = $2 OR "senderUserId" = $2 AND "recipUserId" = $1 ORDER by "timeAndDate" DESC LIMIT 1 `, [userId, match.profile.userid])          
            array.push(
                {
                    profile: match.profile,
                    lastMessage: lastMessage.rows            
                }
            )
        }
        return array;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

// Add messages when provided "senderUserId", "recipUserId", "message","timeAndDate"
exports.add = async (userId, recipUserId, message, timeAndDate) => {
    let result;
    try {
        result = db.query(`INSERT INTO messages("senderUserId", "recipUserId", "message","timeAndDate") VALUES ($1,$2,$3,$4)`, [userId, recipUserId, message, timeAndDate])
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.delete = async (messageId) => {
    try {
        db.query(`DELETE FROM messages WHERE id = $1`, [messageId])
    } catch (error) {
        console.error(error);
        throw error;
    }
}

