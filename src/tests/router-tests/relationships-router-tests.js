let tape = require('tape')
const _tape = require('tape-promise').default;
const test = _tape(tape)
const supertest = require("supertest");
const router = require("../../app");
const testObjects = require('../test-objects');
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

test("route to get relationship matches with userId", t => {
    supertest(router)
        .get('/relationship/status/2')
        .send({ userId: 1 })
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            let actual = res.body.data
            let expected = { isMatch: true, isBlock: false, theirSelection: 'like', yourSelection: 'like' }
            t.deepEquals(actual, expected)
            t.error(err);
            t.end();
        });
});

test("route to post relationship matches with userId", t => {
    supertest(router)
        .post('/relationship/status/2')
        .send({ userId: 1, status: 'like' })
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            let actual = res.body.data
            let expected =  { message: 'relationship updated successfully' }
            t.deepEquals(actual, expected)
            t.error(err);
            t.end();
        });
});

test("route to get /relationship/userSelection/ relationship matches with valid userId and status", t => {
    supertest(router)
        .get('/relationship/userSelection')
        .send({ userId: 1, status: 'like' })
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            let actual = res.body
            let expected =   { status: 200, data: [ { id: 2, userId1: 1, userId2: 3, 'user1-towards-user2': 'like', 'user2-towards-user1': 'none' }, { id: 1, userId1: 1, userId2: 2, 'user1-towards-user2': 'like', 'user2-towards-user1': 'like' } ] }
            t.deepEquals(actual, expected)
            t.error(err);
            t.end();
        });
});

test("route to get /relationship/userSelection/ relationship matches with valid userId and status", t => {
    supertest(router)
        .get('/relationship/userSelection')
        .send({ userId: 1, status: 'like' })
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            let actual = res.body
            let expected =     { status: 200, data: [ { id: 2, userId1: 1, userId2: 3, 'user1-towards-user2': 'like', 'user2-towards-user1': 'none' }, { id: 1, userId1: 1, userId2: 2, 'user1-towards-user2': 'like', 'user2-towards-user1': 'like' } ] }
            t.deepEquals(actual, expected)
            t.error(err);
            t.end();
        });
});