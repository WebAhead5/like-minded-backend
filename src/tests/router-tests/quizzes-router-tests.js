let tape = require('tape')
const _tape = require('tape-promise').default;
const test = _tape(tape)
const supertest = require("supertest");
const router = require("../../app");
const testObjects = require('../james/test-objects');
const resetDatabase = require('../../database/dbbuild');

test("route to homepage", t => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect("content-type", "text/html; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});

//////////////////////////////// VALID INPUT TESTING //////////////////////////////////////

test("route to get /quizzes with valid userId", t => {
    supertest(router)
        .get('/quizzes')
        .send({ userId: 1 })
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            let actual = JSON.stringify(res.body.data);
            let expected = testObjects.getQuizzesData
            t.deepEquals(actual, expected)
            t.error(err);
            t.end();
        });
});

test("route to post /quizzes/question/[QUESTION_ID] with valid questionId", t => {
    supertest(router)
        .post('/quizzes/question/55')
        .send({ userAnswer: 1, userId: 1 })
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            let actual = res.body.data;
            let expected = { message: 'useranswers updated successfully' }
            t.deepEquals(actual, expected)
            t.error(err);
            t.end();
        });
});

test("route to get /quizzes/results/[quizTitle] with valid userId", t => {
    supertest(router)
        .get('/quizzes/results/MBTI-short')
        .send({ userId: 1 })
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            let actual = res.body.data;
            let expected = testObjects.getQuizResult
            t.deepEquals(actual, expected)
            t.error(err);
            t.end();
        });
});

test("route to get /quizzes/match with valid userId, candidateId, quizType", t => {
    supertest(router)
        .get('/quizzes/match')
        .send({ userId: 1, candidateId: 2, quizType: 'MBTI-short' })
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            let actual = res.body.data;
            let expected = { candidatePersonalityType: 'ISFJ', compatabilityScore: '20-40%' }
            t.deepEquals(actual, expected)
            t.error(err);
            t.end();
        });
});

