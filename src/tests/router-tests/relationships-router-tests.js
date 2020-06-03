let tape = require('tape')
const _tape = require('tape-promise').default;
const test = _tape(tape)
const supertest = require("supertest");
const router = require("../../app");
const testObjects = require('../test-objects');
const resetDatabase = require('../../database/dbbuild');

//GET ROUTES
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

test("route to get relationship matches with userId", t => {
    supertest(router)
        .get('/relationship/2')
        .send({ userId: 1 })
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            let actual = res.body.data
            let expected = testObjects.relationshipBetweenUserAndCandidate;
            t.deepEquals(actual, expected)
            t.error(err);
            t.end();
        });
});

//TODO: Haven't done this testing yet
// test("route to get relationship matches with userId", t => {
//     supertest(router)
//         .get('/relationship/matches')
//         .expect(200)
//         .expect("content-type", "text/html; charset=utf-8")
//         .end((err, res) => {
//             t.deepEquals(res.body.data, testObjects.userProfile)
//             t.error(err);
//             t.end();
//         });
// });

