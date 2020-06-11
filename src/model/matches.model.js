const db = require('../database/dbconnection')
const validators = require("../tools/modelsInputValidators")

//  get potential matches with the userId
exports.getPotentialMatches = async (userId, options = {}) => {
    validators.checkUserIdType(userId);
    await validators.checkUserExists(userId);

    let potentialMatches = await db.query(`SELECT * FROM userprofile 
    INNER JOIN userRelationship ON userRelationship."userId1" = userprofile.userId OR userRelationship."userId2" = userprofile.userId
    WHERE userRelationship."userId1" = $1 AND userRelationship."user1-towards-user2" = 'none' OR userRelationship."userId2" = $1 AND userRelationship."user2-towards-user1" = 'none'
    `
    , [userId])

    // let potentialMatches1 = await db.query(`SELECT * from userprofile 
    // INNER JOIN userRelationship ON userprofile.userId = userRelationship.userId1 OR userprofile.userId = .userId2 
    // WHERE ( userRelationship.userId1 = $1 AND userRelationship.user1-towards-user2 = 'none')
    // OR ( userRelationship.userId2 = $1 AND userRelationship.user2-towards-user1 = 'none')`, [userId])

    return potentialMatches.rows;
}

// let example1 = (`'SELECT comments.id ,comments.message ,comments.userid ,comments.bountyid , comments.dateposted, users.username FROM comments INNER JOIN users on users.id = comments.userid INNER JOIN bounties on bounties.id = comments.bountyid WHERE bountyid = $1;'`)

// let example = {
//     "ok": "ok",
//     "status": 200,
//     "data": [
//         {
//             "profile": 1, //{ same as GET  / userProfile / [user_id],
//             "quizzesResults": 2 //{ GET / quizzesMatch / [otherUserId]
//         },
//         {
//             "profile": 1, //{ same as GET  / userProfile / [user_id],
//             "quizzesResults": 2 //{ GET / quizzesMatch / [otherUserId]
//         }
//     ]
// };