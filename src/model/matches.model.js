const db = require('../database/dbconnection')
const quizzesModel = require("./quizzes.model")
const validators = require("../tools/modelsInputValidators")

//  get potential matches with the userId
exports.getPotentialMatches = async (userId, options = {}) => {
    validators.checkUserIdType(userId);
    await validators.checkUserExists(userId);

    let potentialMatches = await db.query(`
        select * 
        from userprofile
        where userid in
              ((SELECT userid from userprofile
                         inner join userRelationship ON userRelationship."userId1" = userprofile.userId OR
                                                        userRelationship."userId2" = userprofile.userId
                WHERE ($1 in (userRelationship."userId1", userRelationship."userId2"))
                  and (userRelationship."user2-towards-user1" != userRelationship."user1-towards-user2")
                  and userid != $1)
             
               union distinct
               ( SELECT userid from userprofile  left join userrelationship on null where userid != $1));;
    `, [userId])


    let getQuizResults = async (userId, candidateId, quizType) => await quizzesModel.getQuizzesMatchResults(userId, candidateId, quizType)

    let emptyArray = [];
    for (let userRow of potentialMatches.rows)
        emptyArray.push({
            "profile": userRow,
            "quizzesResults": await getQuizResults(userId, userRow.userid, 'MBTI-short')
        })

    return emptyArray
}

