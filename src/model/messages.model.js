const db = require('../database/dbconnection')

// Get all messages between userId and otherUserId
exports.get = async (userId, otherUserId) => {
    let result;
    try {
        result = await db.query(`SELECT * FROM messages WHERE "senderUserId" = $1 AND "recipUserId" = $2 OR "senderUserId" = $2 AND "recipUserId" = $1`, [userId, otherUserId])
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


         await db.query(`INSERT INTO messages("senderUserId", "recipUserId", "message","timeAndDate") VALUES ($1,$2,$3,$4)`, [userId, recipUserId, message, timeAndDate])

}

exports.delete = async (messageId) => {
    try {
        await db.query(`DELETE
                        FROM messages
                        WHERE id = $1`, [messageId])
    } catch (error) {
        console.error(error);
        throw error;
    }
}
