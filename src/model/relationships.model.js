const db = require('../database/dbconnection')

// Get existing matches, where both user and candidate like each other
exports.getAllMatchesWith = async (userId) => {
    try {
        let allMatches = await db.query(`SELECT * FROM "userRelationship" WHERE ("userId1" = $1 OR "userId2" = $1) AND "user1-towards-user2" = 'like' AND "user2-towards-user1" = 'like'`, [userId])
        return allMatches.rows
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Get relationships where user has selected none/block/like
exports.getRelationshipWhereUserSelected = async (status, userId) => {
    try {
        let potentialMatches = await db.query(
            `SELECT * FROM userRelationship WHERE ( "userId1" = $1 AND "user1-towards-user2" = $2)
            OR ( "userId2" = $1 AND "user2-towards-user1" = $2)`, [userId, status])
        return potentialMatches.rows
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Get relationships where candidates have selected none/block/like
exports.getRelationshipsWhereCandidateSelected = async (status, userId) => {
    try {
        let potentialMatches = await db.query(
            `SELECT * FROM userRelationship WHERE ( "userId1" = $1 AND "user2-towards-user1" = $2)
            OR ( "userId2" = $1 AND "user1-towards-user2" = $2)`, [userId, status])
        return potentialMatches.rows
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Get the like/block/none status of user and candidate
exports.getRelationshipStatusBetween = async (userId, candidateId) => {
    try {
        let relationshipStatus = await db.query('SELECT * FROM "userRelationship" WHERE ("userId1" = $1 AND "userId2" = $2 ) OR ("userId1" = $2 AND "userId2" = $1)', [userId, candidateId]);
        return relationshipStatus.rows
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Change the relationship between the user and candidate
exports.setRelationshipStatus = async (userId, candidateId, status) => {
    try {
        let statusCheck = await db.query(
            'SELECT * FROM "userRelationship" WHERE ("userId1" = $1 AND "userId2" = $2) OR ("userId1" = $2 AND "userId2" = $1)', [userId, candidateId]
        )

        if (statusCheck.rowCount === 0)
            await db.query(
                `insert into userRelationship ("userId1", "userId2","user1-towards-user2", "user2-towards-user1") values ( $1, $2, $3, 'none') `, [userId, , candidateId, status]
            )

        else {
            let isUserOneFirst = parseInt(statusCheck.rows[0].userId1) === userId;

            await db.query(
                `UPDATE userRelationship SET ${isUserOneFirst ? "user1-towards-user2" : "user2-towards-user1"} WHERE "userId1" = $1 AND "userId2" = $2  `,
                [isUserOneFirst ? userId : candidateId,
                !isUserOneFirst ? userId : candidateId,
                    candidateId, status]

            )



        }
        console.log(statusCheck);
    } catch (error) {
        console.error(error);
        throw error;
    }



}