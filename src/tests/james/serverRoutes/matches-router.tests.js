let tape = require('tape')
const _tape = require('tape-promise').default;
const test = _tape(tape)
const supertest = require("supertest");
const app = require("../../../app");
const objects = require('../test-objects');
const resetDatabase = require('../../../database/dbbuild');

///////////////////////// VALID INPUT TESTS //////////////////////////////////////////

test("route to homepage", t => {
    resetDatabase();
    supertest(app)
        .get("/")
        .expect(200)
        .expect("content-type", "text/html; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});

test("route /matches to get potential matches valid profile userId", t => {
    resetDatabase();
    supertest(app)
        .get("/matches")
        .send({userId: 1})
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {  
            t.deepEquals(res.body.data, [ { profile: { id: 16, userid: 6, firstname: 'Mehyar', lastname: 'Davis', gender: 'male', status: 'Single', bio: 'ARTIST ', job: 'COUCH DRIVER', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', subphotos: [ 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4' ], userId1: 6, userId2: 1, 'user1-towards-user2': 'none', 'user2-towards-user1': 'none' }, quizzesResults: { candidatePersonalityType: 'ISFJ', compatabilityScore: '20-40%' } } ])
            t.error(err);
            t.end();
        });
});

/////////////////////////// INVALID INPUT TESTS /////////////////////////////////

// test("route to post user profile info with invalid userId", t => {
//     resetDatabase();
//     supertest(app)
//         .post("/userProfile/gler")
//         .send({firstname: "Kevin"})
//         .expect(404)
//         .expect("content-type", "application/json; charset=utf-8")
//         .end((err, res) => {      
//             t.deepEquals(res.body.message,'Invalid params provided')
//             t.error(err);
//             t.end();
//         });
// });

