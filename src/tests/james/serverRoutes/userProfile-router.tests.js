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

test("route /userProfile to get user profile info with valid profile userId", t => {
    resetDatabase();
    supertest(app)
        .get("/userProfile/1")
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {            
            t.deepEquals(res.body.data, objects.userProfile)
            t.error(err);
            t.end();
        });
});

test("route to post user profile info with valid userId", t => {
    resetDatabase();
    supertest(app)
        .post("/userProfile/1")
        .send({firstname: "Kevin"})
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {      
            t.deepEquals(res.body.message,"user info updated successfully")
            t.error(err);
            t.end();
        });
});

test("route to delete user profile info with valid userId", t => {
    resetDatabase();
    supertest(app)
        .delete("/userProfile/1")
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {      
            t.deepEquals(res.body.message,"user deleted successfully")
            t.error(err);
            t.end();
        });
});

/////////////////////////// INVALID INPUT TESTS /////////////////////////////////

test("route to post user profile info with invalid userId", t => {
    resetDatabase();
    supertest(app)
        .post("/userProfile/gler")
        .send({firstname: "Kevin"})
        .expect(404)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {      
            t.deepEquals(res.body.message,'Invalid params provided')
            t.error(err);
            t.end();
        });
});

