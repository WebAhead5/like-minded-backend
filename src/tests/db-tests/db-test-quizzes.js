let tape = require('tape')
const _tape = require('tape-promise').default;
tape = _tape(tape)
const resetDatabase = require('../../database/dbbuild');

const quizzesQueries = require('../../model/quizzes.model');
const testObjects = require('../../tests/james/test-objects')

tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});

////////////////// VALID INPUT TESTS //////////////////////////////////

tape('quizzes.model.getQuizzesData with valid userId and candidateId', async t => {
    await resetDatabase();
    let userId = 1
    try {
        let response = await quizzesQueries.getQuizzesData(userId)
        let expected = testObjects.getQuizzesData
        let actual = JSON.stringify(response)
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

tape('quizzes.model.getQuizResult with valid userId and quizTitle', async t => {
    await resetDatabase();
    let userId = 1
    let quizTitle = 'MBTI-short'
    try {
        let response = await quizzesQueries.getQuizResult(userId, quizTitle)
        let expected = testObjects.getQuizResult
        let actual = response
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

tape('quizzes.model.getQuizzesMatchResults with valid userId, candidateID and quizTitle', async t => {
    await resetDatabase();
    let userId = 1;
    let candidateId = 2;
    let quizTitle = 'MBTI-short'
    try {
        let response = await quizzesQueries.getQuizzesMatchResults(userId, candidateId, quizTitle)
        let expected = { candidatePersonalityType: 'ISFJ', compatabilityScore: '20-40%' }
        let actual = response
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

tape('quizzes.model.setAnswer with valid userId, questionId, userAnswer', async t => {
    await resetDatabase();
    let userId = 1;
    let questionId = 55;
    let userAnswer = 1
    try {
        let response = await quizzesQueries.setAnswer(userId, questionId, userAnswer)
        let expected = { message: 'useranswers updated successfully' }
        let actual = response
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})


////////////////// INVALID INPUT TESTS //////////////////////////////////

tape('quizzes.model.getQuizzesData with invalid userId', async t => {
    await resetDatabase();
    let userId = "wrong"
    try {
        let response = await quizzesQueries.getQuizzesData(userId)
        t.error(true, "Test should have failed. Possibly bad object input?")
    } catch (error) {
        t.ok(error, "test failed as per expectations: " + error.message)
    }
    t.end()
})


tape('quizzes.model.getQuizResult with valid userId and invalid quizTitle', async t => {
    await resetDatabase();
    let userId = 1;
    let quizTitle = "wrongquiztitle"
    try {
        let response = await quizzesQueries.getQuizResult(userId, quizTitle)
        t.error(true, "Test should have failed. Possibly bad object input?")
    } catch (error) {
        t.ok(error, "test failed as per expectations: " + error.message)
    }
    t.end()
})

tape('quizzes.model.getQuizResult with invalid userId and valid quizTitle', async t => {
    await resetDatabase();
    let userId = "wronguserid";
    let quizTitle = "MBTI-short"
    try {
        let response = await quizzesQueries.getQuizResult(userId, quizTitle)
        t.error(true, "Test should have failed. Possibly bad object input?")
    } catch (error) {
        
        t.ok(error, "test failed as per expectations: " + error.message)
    }
    t.end()
})

