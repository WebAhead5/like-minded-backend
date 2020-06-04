const db = require('../database/dbconnection')

// Get all messages between userId and otherUserId
exports.getChat = async (userId, otherUserId, {count, offset}) => {
    let result;
    let sql = `SELECT * FROM messages WHERE "senderUserId" = $1 AND "recipUserId" = $2 OR "senderUserId" = $2 AND "recipUserId" = $1 ORDER by timeAndDate DESC`;
    if(count !== undefined)
        {
            sql += ` LIMIT "count" = $3 `
            if(offset !== undefined)
                sql += `  OFFSET "offset" = $4 `

        }
    try {
        // result = await db.query(`SELECT * FROM messages WHERE "senderUserId" = $1 AND "recipUserId" = $2 OR "senderUserId" = $2 AND "recipUserId" = $1 ORDER by timeAndDate ` , [userId, otherUserId])
        // result = await db.query(`SELECT * FROM messages WHERE "senderUserId" = $1 AND "recipUserId" = $2 OR "senderUserId" = $2 AND "recipUserId" = $1 ORDER by timeAndDate LIMIT "count" = $3 OFFSET "offset" = $4` , [userId, otherUserId, count, offset])
        result = await db.query(sql , [userId, otherUserId, count, offset])

    } catch (error) {
        console.error(error);
        throw error;
    }
    if (result.rows.length === 0)
        throw new Error("user not found")
    return result.rows;
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
        db.query(`DELETE FROM messages WHERE id = $1`,[messageId])
    } catch (error) {
        console.error(error);
        throw error;
    }
}


exports.getChatsWith = async (userId) => {
    let result;
      try {
      result = await db.query(`SELECT * FROM messages WHERE "senderUserId" = $1 AND "recipUserId" = $2 OR "senderUserId" = $2 AND "recipUserId" = $1 ORDER by timeAndDate DESC LIMIT 1 GROUP BY  `; , [userId, otherUserId])

    } catch (error) {
        console.error(error);
        throw error;
    }
    if (result.rows.length === 0)
        throw new Error("user not found")
    return result.rows;