let tape = require('tape')
const _tape = require('tape-promise').default;
const test = _tape(tape)
const supertest = require("supertest");
const app = require("../../../app");


//GET ROUTES
test("route to homepage", t => {
    supertest(app)
        .get("/")
        .expect(200)
        .expect("content-type", "text/html; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});

//////////////////////////////// VALID INPUT TESTING //////////////////////////////////////


test("route to get all relationships where user and candidates like each other", t => {
    supertest(app)
        .get("/messages")
        .send({userId: 1})
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            let actual = res.body.data
            let expected = [ { profile: { id: 2, userid: 2, firstname: 'Moris', lastname: 'Rafoul', gender: 'male', status: 'Single', bio: 'Teaching web-dev', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', subphotos: [ 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4' ] } } ]
            t.deepEquals(actual, expected)
            t.error(err);
            t.end();
        });
});



test('get all messages when userId=1 and otherUserId=2', t => {
    supertest(router)
        .get("/messages/2")
        .send({userId: 1})
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            let actual = res.body
            let expected = []
            t.deepEquals(actual, expected)
            t.error(err);
            t.end();
        });
});