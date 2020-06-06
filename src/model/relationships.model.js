const db = require('../database/dbconnection')
const userProfileModel = require('./userProfile.model')

// Get the like/block/none status of user and candidate
exports.getRelationshipStatusBetween = async (userId, candidateId) => {
    try {
        let relationshipStatus = await db.query(`SELECT *  FROM "userrelationship" WHERE ("userId1" = $1 AND "userId2" = $2 ) OR ("userId1" = $2 AND "userId2" = $1)`, [userId, candidateId]);

        let u1tu2 = relationshipStatus.rows[0]["user1-towards-user2"];
        let u2tu1 = relationshipStatus.rows[0]["user2-towards-user1"];
        let { userId2 } = relationshipStatus.rows[0];
        return {
            isMatch: u1tu2 === u2tu1 && u2tu1 === "like",
            isBlock: u2tu1 === "block" || u1tu2 === "block",
            theirSelection: userId2 == candidateId ? u2tu1 : u1tu2,
            yourSelection: userId2 == userId ? u2tu1 : u1tu2,
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Get existing matches, where both user and candidate like each other
exports.getAllMatchesWith = async (userId) => {
    try {
        let allMatches = await db.query(`SELECT * FROM "userrelationship" WHERE ("userId1" = $1 OR "userId2" = $1) AND "user1-towards-user2" = 'like' AND "user2-towards-user1" = 'like'`, [userId])
        let rows = allMatches.rows;
        let profiles = []
        for (let row in rows) {
            profiles.push({ profile: await userProfileModel.get(rows[row].userId1 == userId? rows[row].userId2 : rows[row].userId1) })
        }
        return profiles
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Get relationships where user has selected none/block/like
exports.getRelationshipWhereUserSelected = async (status, userId) => {
    if (!status || !userId) throw Error( "params not provided");
    if (isNaN(userId)) throw Error("userId is not a number");
    try {
        let potentialMatches = await db.query(
            `SELECT * FROM userRelationship WHERE ( "userId1" = $1 AND "user1-towards-user2" = $2)
            OR ( "userId2" = $1 AND "user2-towards-user1" = $2)`, [userId, status])

            let formattedRelationshipObject = [];

            for (let row of potentialMatches.rows) {
                formattedRelationshipObject.push( {
                    "profile": await userProfileModel.get(row.userId1 == userId? row.userId2 : row.userId1),
                    ...await exports.getRelationshipStatusBetween(userId, row.userId1 == userId ? row.userId2 : row.userId1)
                })
            }
                      
        return formattedRelationshipObject;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Get relationships where candidates have selected none/block/like
exports.getRelationshipsWhereCandidateSelected = async (status, userId) => {
    try {
        let potentialMatches = await db.query(
            `SELECT * FROM userRelationship WHERE ( "userId2" = $1 AND "user1-towards-user2" = $2)
            OR ( "userId1" = $1 AND "user2-towards-user1" = $2)`, [userId, status])

            let formattedRelationshipObject = [];
            for (let row of potentialMatches.rows) {
                formattedRelationshipObject.push( {
                    "profile": await userProfileModel.get(row.userId1 == userId? row.userId2 : row.userId1),
                    ...await exports.getRelationshipStatusBetween(userId, row.userId1 == userId ? row.userId2 : row.userId1)
                })
            }    
        return formattedRelationshipObject;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Change the relationship between the user and candidate
exports.setRelationshipStatus = async (userId, candidateId, status) => {
    try {
        // Get relationship between user and candidate
        let statusCheck = await db.query(
            'SELECT * FROM userRelationship WHERE ("userId1" = $1 AND "userId2" = $2) OR ("userId1" = $2 AND "userId2" = $1)', [userId, candidateId]
        )
        // eg, SELECT * FROM "userRelationship" WHERE ("userId1" = 1 AND "userId2" = 2) OR ("userId1" = 2 AND "userId2" = 1)

        // if there is no relationship create row
        if (statusCheck.rowCount === 0)
            await db.query(
                `INSERT INTO userRelationship ("userId1", "userId2","user1-towards-user2", "user2-towards-user1") VALUES ( $1, $2, $3, 'none') `, [userId, , candidateId, status]
                // eg, INSERT INTO userRelationship ("userId1", "userId2","user1-towards-user2", "user2-towards-user1") VALUES (1,2, 'like', 'none')
            )
        // else if there is an existing relationship, 
        else {
            let isUserOneFirst = parseInt(statusCheck.rows[0].userId1) === userId;
            await db.query(
                `UPDATE userRelationship SET ${isUserOneFirst ? `"user1-towards-user2"` : `"user2-towards-user1"`} = $3 WHERE "userId1" = $1 AND "userId2" = $2  `,
                [isUserOneFirst ? userId : candidateId,
                !isUserOneFirst ? userId : candidateId,
                    status]
            )
            // eg, UPDATE userRelationship SET "user1-towards-user2" = 'like' WHERE "userId1" = 1 AND "userId2" = 2
            return await exports.getRelationshipStatusBetween(userId, candidateId);
        }
    } catch (error) {
        console.error("UPDATE ", error);
        throw error;
    }
}

