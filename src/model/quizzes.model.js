const db = require('../database/dbconnection')
const validate = require('../tools/modelsInputValidators')

// get an object containing all the questions and answers for each quiz title. Also get the completion level for each quiz by the user.
exports.getQuizzesData = async (userId) => {
    validate.checkUserIdType(userId); await validate.checkUserExists(userId);
    try {
        // get an array of unique quiz titles 
        let quizQuestionsData = await db.query(`SELECT * FROM "quizQuestions"`)
        arrayOfQuizTitles = [];
        quizQuestionsData.rows.map(row => arrayOfQuizTitles.push(row.title));
        let uniqueQuizTitles = arrayOfQuizTitles.filter((item, i, ar) => ar.indexOf(item) === i);

        // get the completion level for each quiz type by the user
        let quizAnswersData = await db.query(`SELECT * FROM "quizAnswers" WHERE "userId" = $1`, [userId])

        let getCompletionLevel = (uniqueQuizTitle) => {

            let totalNumberOfQuestionsOfQuizType = quizQuestionsData.rows.filter(questionRow => questionRow.title == uniqueQuizTitle).length

            // filters through Answers rows and returns only those that match the unique quiz title. Eg, returns all MBTI answers when MBTI is the unique quiz title.
            // filter through each quiz answer from particular quiz:
            let quizAnswersFilteredToQuizType = quizAnswersData.rows.filter(answersRow => {

                // foundRow = the quizQuestion row where the question id matches the id in the answers row id.
                let foundRow = quizQuestionsData.rows.find(questionsRow => questionsRow.id == answersRow.questionsId)
                if (foundRow == undefined) { console.log("no matching answered question", foundRow); return }
                return foundRow.title === uniqueQuizTitle
            })

            // Checks the users answers for a quiz type and works out how many answered and how many unanswered. Then we get the percentage complete.
            let totalAnswered = 0;
            quizAnswersFilteredToQuizType.forEach(row => {
                row.answer != 0 ? totalAnswered++ : totalAnswered;
            })
            let percentComplete = totalAnswered / totalNumberOfQuestionsOfQuizType

            return percentComplete
        }

        let getArrayOfQuestionsByQuizType = (type) => {
            // Filter quiz questions by quiz type
            let filteredQuestionsByQuizType = quizQuestionsData.rows.filter(questionsRow => {
                if (!questionsRow.title) { console.log("no matching questions row question", questionsRow.title); return }
                return questionsRow.title === type
            })
            return filteredQuestionsByQuizType.map((eachQuestion) => {
                let newObj = {}
                let answersRow = quizAnswersData.rows.find(answersRow => answersRow.id === eachQuestion.id)
                newObj['id'] = eachQuestion.id;
                newObj['question'] = eachQuestion.question;
                newObj['userAnswer'] = answersRow ? answersRow.answer : 0;
                newObj['answers'] = eachQuestion.answers;
                return newObj
            })
        }

        return uniqueQuizTitles.map(uniqueQuizTitle => {
            return {
                quizTitle: uniqueQuizTitle,
                completionLevel: getCompletionLevel(uniqueQuizTitle),
                isCompleted: getCompletionLevel(uniqueQuizTitle) === 1 ? true : false,
                questions: getArrayOfQuestionsByQuizType(uniqueQuizTitle)
            }
        })

    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.getQuizResult = async (userId, quizTitle) => {
    await validate.checkUserIdType(userId); await validate.checkUserExists(userId); await validate.isQuizType(quizTitle);
    try {
        let quizAnswersData = await db.query(`SELECT * FROM "quizAnswers" WHERE "userId" = $1`, [userId])
        let quizQuestionsData = await db.query(`SELECT * FROM "quizQuestions"`)
        let mbtiData = await db.query(`SELECT * FROM "mbtiInfo"`)

        // filters through Answers rows and returns only those that match the unique quiz title. Eg, returns all MBTI answers when MBTI is the unique quiz title.
        let getCompletionLevel = (uniqueQuizTitle) => {
            // filters through Answers rows and returns only those that match the unique quiz title. Eg, returns all MBTI answers when MBTI is the unique quiz title.
            let quizAnswersFilteredToQuizType = quizAnswersData.rows.filter(answersRow => {
                let foundRow = quizQuestionsData.rows.find(questionsRow => questionsRow.id == answersRow.questionsid)
                return foundRow.title === uniqueQuizTitle
            })
            // Checks the users answers for a quiz type and works out how many answered and how many unanswered. Then we get the percentage complete.
            let totalAnswered = 0; let totalQuestions = 0;
            quizAnswersFilteredToQuizType.forEach(row => {
                totalQuestions++;
                row.answer != 0 ? totalAnswered++ : totalAnswered;
            })
            let percentComplete = totalAnswered / totalQuestions
            return percentComplete
        }

        // get results for MBTI-Short test.
        let calcMbtiShortPersonalityType = (userAnswers) => {
            let extIntAnswers = userAnswers.filter((answersRow => answersRow.questionsId >= 1 && answersRow.questionsId <= 3))
            let intSenAnswers = userAnswers.filter((answersRow => answersRow.questionsId >= 4 && answersRow.questionsId <= 6))
            let judPerAnswers = userAnswers.filter((answersRow => answersRow.questionsId >= 7 && answersRow.questionsId <= 9))
            let feeThiAnswers = userAnswers.filter((answersRow => answersRow.questionsId >= 10 && answersRow.questionsId <= 12))

            let extIntScore = extIntAnswers.reduce((acc, cur) => acc + cur.answer, 0);
            let intSenScore = intSenAnswers.reduce((acc, cur) => acc + cur.answer, 0);
            let judPerScore = judPerAnswers.reduce((acc, cur) => acc + cur.answer, 0);
            let feeThiScore = feeThiAnswers.reduce((acc, cur) => acc + cur.answer, 0);

            if (extIntScore === 0 || intSenScore === 0 || judPerScore === 0 || feeThiScore === 0) {
                console.error("error - one of the user spectrum scores = 0 and quiz is probably incomplete. Scores are:", extIntScore, intSenScore, feeThiScore, judPerScore);
                return "test incomplete"
            }

            let arr = [extIntScore > 0 ? 'E' : 'I', intSenScore > 0 ? 'N' : 'S', feeThiScore > 0 ? 'T' : 'F', judPerScore > 0 ? 'J' : 'P']

            return arr.join('')
        }

        let getMbtiItem = (personalityType, item, mbtiDataRows) => {
            let mbtiRow = mbtiDataRows.find(row => {
                return row.mbtiType === personalityType
            });

            if (!mbtiRow) {
                return "incomplete quiz results"
            };
            return mbtiRow[item]
        }

        let calculatedPersonalityType = calcMbtiShortPersonalityType(quizAnswersData.rows)

        return {
            question: quizTitle,
            mbtiType: calculatedPersonalityType,
            about: getMbtiItem(calculatedPersonalityType, "about", mbtiData.rows),
            relationshipDescrip1: getMbtiItem(calculatedPersonalityType, "relationshipDescrip1", mbtiData.rows),
            relationshipDescrip2: getMbtiItem(calculatedPersonalityType, "relationshipDescrip2", mbtiData.rows),
            moreInfoLink: getMbtiItem(calculatedPersonalityType, "moreInfoLink", mbtiData.rows)
        }
    } catch (error) {
        console.error(error);
        throw error;
    }

}

exports.getQuizzesMatchResults = async (userId, candidateId, quizType) => {
    validate.checkUserIdType(userId); validate.checkUserIdType(candidateId);
    await validate.checkUserExists(userId); await validate.checkUserExists(candidateId);
    validate.isQuizType(quizType);

    try {
        let userQuizResults = await exports.getQuizResult(userId, quizType);
        let candidateQuizResults = await exports.getQuizResult(candidateId, quizType);

        let compatabilityData = await db.query(`SELECT * FROM "mbtiCompatabilitylevel" WHERE "typeA" = $1 AND "typeB" = $2`, [userQuizResults.mbtiType, candidateQuizResults.mbtiType])

        if (!compatabilityData.rows[0]) return { candidatePersonalityType: "quiz is incomplete", compatabilityScore: "quiz is incomplete" };
        let compatabilityScore = compatabilityData.rows[0].compatabilityLevel;

        let compatabilityEquivalent = {
            1: '10-20%',
            2: '20-40%',
            3: '40-60%',
            4: '60-80%',
            5: '80-100%'
        }

        return {
            candidatePersonalityType: candidateQuizResults.mbtiType,
            compatabilityScore: compatabilityEquivalent[compatabilityScore]
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

exports.setAnswer = async (userId, questionId, userAnswer) => {
    await validate.checkUserIdType(userId); await validate.checkUserExists(userId);
    try {
        db.query(`INSERT INTO "userAnswers" ("userId", "quizQuestionsId", answer) VALUES ($1,$2,$3 )`, [userId, questionId, userAnswer]);
        return { message: "useranswers updated successfully" }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// `INSERT INTO userRelationship ("userId1", "userId2","user1-towards-user2", "user2-towards-user1") VALUES ( $1, $2, $3, 'none') `, [userId, , candidateId, status]