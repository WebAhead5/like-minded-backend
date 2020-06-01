let tape = require('tape')
const _tape = require('tape-promise').default;
const test = _tape(tape)
const supertest = require("supertest");
const router = require("../app");
const objects = require('./test-objects');
const resetDatabase = require('../database/dbbuild');

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

//TODO: Haven't done this testing yet
test("route to get relationship matches with userId", t => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect("content-type", "text/html; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});


test("route /userProfile to get user profile info with valid profile userId", t => {
    supertest(router)
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
    supertest(router)
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

test("route to post user profile info with invalid userId", t => {
    resetDatabase();
    supertest(router)
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