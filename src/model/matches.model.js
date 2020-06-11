const db = require('../database/dbconnection')
const quizzesModel = require("./quizzes.model")
const validators = require("../tools/modelsInputValidators")

//  get potential matches with the userId
exports.getPotentialMatches = async (userId, options = {}) => {
    validators.checkUserIdType(userId);
    await validators.checkUserExists(userId);

    let potentialMatches = await db.query(`
    SELECT * FROM userprofile
    INNER JOIN userRelationship ON userRelationship."userId1" = userprofile.userId OR userRelationship."userId2" = userprofile.userId
    WHERE (userRelationship."userId1" = $1 AND userRelationship."user1-towards-user2" = 'none' AND userprofile.userid != $1) OR (userRelationship."userId2" = $1 AND userRelationship."user2-towards-user1" = 'none' AND userprofile.userid != $1) ;
    `    , [userId])

    

    let getQuizResults = async (userId, candidateId, quizType) => await quizzesModel.getQuizzesMatchResults(userId, candidateId, quizType)

    let emptyArray = [];
    for (let userRow of potentialMatches.rows)
        emptyArray.push({
            "profile": userRow,
            "quizzesResults": await getQuizResults(userId, userRow.userid, 'MBTI-short')
        })

    return emptyArray
}

