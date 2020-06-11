const db = require('../database/dbconnection')
const userProfileModel = require('./userProfile.model')
const validators = require("../tools/modelsInputValidators")

// Get the like/block/none status of user and candidate
exports.getRelationshipStatusBetween = async (userId, candidateId) => {

    validators.checkUserIdType(userId)
    validators.checkUserIdType(userId)
    await validators.checkUserExists(userId)
    await validators.checkUserExists(candidateId)

    let relationshipStatus = await db.query(`SELECT *
                                             FROM "userrelationship"
                                             WHERE ("userId1" = $1 AND "userId2" = $2)
                                                OR ("userId1" = $2 AND "userId2" = $1)`, [userId, candidateId]);

    if(relationshipStatus.rowCount === 0)
        return {}

    let u1tu2 = relationshipStatus.rows[0]["user1-towards-user2"];
    let u2tu1 = relationshipStatus.rows[0]["user2-towards-user1"];
    let {userId1,userId2} = relationshipStatus.rows[0];

    return {
        isMatch: u1tu2 === u2tu1 && u2tu1 === "like",
        isBlock: u2tu1 === "block" || u1tu2 === "block",
        theirSelection: userId === userId1 ? u2tu1 : u1tu2,
        yourSelection: userId === userId1 ? u1tu2 : u2tu1
    }
}

// Get existing matches, where both user and candidate like each other
exports.getAllMatchesWith = async (userId) => {

    validators.checkUserIdType(userId)
    await validators.checkUserExists(userId)

    let allMatches = await db.query(`SELECT *
                                     FROM "userrelationship"
                                     WHERE ("userId1" = $1 OR "userId2" = $1)
                                       AND "user1-towards-user2" = 'like'
                                       AND "user2-towards-user1" = 'like'`, [userId])

    let profiles = []
    for (let row of allMatches.rows)
        profiles.push({profile: await userProfileModel.get(row.userId1 == userId ? row.userId2 : row.userId1)})

    return profiles;
}

// Get relationships where user has selected none/block/like
exports.getRelationshipWhereUserSelected = async (status, userId) => {

    validators.checkUserIdType(userId)
    await validators.checkUserExists(userId)

    let potentialMatches;

    if(status)
    {
        await validators.validateObjectFieldTypes({relationshipStatus : status})

        potentialMatches = await db.query(
            `SELECT * FROM userRelationship WHERE ( "userId1" = $1 AND "user1-towards-user2" = $2)
                            OR ( "userId2" = $1 AND "user2-towards-user1" = $2)`, [userId, status])
    }
    else
    {
        let availableTypes = await db.query("SELECT unnest(enum_range(NULL::relationshipType))::varchar as coltype")
        availableTypes = availableTypes.rows.map(x => x.coltype.toLowerCase()).filter(x=>x!=="none").map(x=>`'${x}'`).join(",");

        potentialMatches = await db.query(
            `SELECT * FROM userRelationship WHERE ( "userId1" = $1 AND "user1-towards-user2" in (${availableTypes}) )
        OR ( "userId2" = $1 AND "user2-towards-user1" in  (${availableTypes}))`, [userId])
    }
        let formattedRelationshipObject = [];

        for (let row of potentialMatches.rows) {
            formattedRelationshipObject.push( {
                "profile": await userProfileModel.get(row.userId1 == userId? row.userId2 : row.userId1),
                ...await exports.getRelationshipStatusBetween(userId, row.userId1 == userId ? row.userId2 : row.userId1)
            })
        }
    return formattedRelationshipObject;
}

// Get relationships where candidates have selected none/block/like
exports.getRelationshipsWhereCandidateSelected = async (status, userId) => {

    validators.checkUserIdType(userId)
    await validators.checkUserExists(userId)

    let potentialMatches;

    if(status)
    {
        await validators.validateObjectFieldTypes({relationshipStatus : status})

        potentialMatches = await db.query(
            `SELECT * FROM userRelationship WHERE ( "userId2" = $1 AND "user1-towards-user2" = $2)
                                               OR ( "userId1" = $1 AND "user2-towards-user1" = $2)`, [userId, status])
    }
    else
    {
        let availableTypes = await db.query("SELECT unnest(enum_range(NULL::relationshipType))::varchar as coltype")
        availableTypes = availableTypes.rows.map(x => x.coltype.toLowerCase()).filter(x=>x!=="none").map(x=>`'${x}'`).join(",");

        potentialMatches = await db.query(
            `SELECT * FROM userRelationship WHERE (  "userId2" = $1 AND "user1-towards-user2" in (${availableTypes}) )
        OR ( "userId1" = $1 AND "user2-towards-user1"  in  (${availableTypes}))`, [userId])

    }

    let formattedRelationshipObject = [];

    for (let row of potentialMatches.rows) {
        formattedRelationshipObject.push( {
            "profile": await userProfileModel.get(row.userId1 == userId? row.userId2 : row.userId1),
            ...await exports.getRelationshipStatusBetween(userId, row.userId1 == userId ? row.userId2 : row.userId1)
        })
    }

    return formattedRelationshipObject;

}

// Change the relationship between the user and candidate
exports.setRelationshipStatus = async (userId, candidateId, status) => {

    validators.checkUserIdType(userId)
    validators.checkUserIdType(userId)
    await validators.checkUserExists(userId)
    await validators.checkUserExists(candidateId)
    await validators.validateObjectFieldTypes({relationshipStatus: status})


    // Get relationship between user and candidate
    let statusCheck = await db.query(
        // eg, SELECT * FROM "userRelationship" WHERE ("userId1" = 1 AND "userId2" = 2) OR ("userId1" = 2 AND "userId2" = 1)
        'SELECT * FROM userRelationship WHERE ("userId1" = $1 AND "userId2" = $2) OR ("userId1" = $2 AND "userId2" = $1)', [userId, candidateId]
    )

    // if there is no relationship create row
    if (statusCheck.rowCount === 0)
        await db.query(
                `INSERT INTO userRelationship ("userId1", "userId2", "user1-towards-user2", "user2-towards-user1")
                 VALUES ($1, $2, $3, 'none') `, [userId, candidateId, status]
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

}

