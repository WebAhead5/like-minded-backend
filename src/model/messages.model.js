const db = require('../database/dbconnection')

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

exports.add = async (userId, recipUserId, message, timeAndDate) => {
    let result;

    try {
        result = db.query(`INSERT INTO messages("senderUserId", "recipUserId", "message","timeAndDate") VALUES ($1,$2,$3,$4)`, [userId, recipUserId, message, timeAndDate])
    } catch (error) {
        console.error(error);
        throw error;
    }

}
