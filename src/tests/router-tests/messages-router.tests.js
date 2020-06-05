let tape = require('tape')
const _tape = require('tape-promise').default;
const test = _tape(tape)
const supertest = require("supertest");
const app = require("../../app");


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

//TODO: Haven't done this testing yet
test("route to get all relationships where user and candidates like each other", t => {
    supertest(app)
        .get("/messages")
        .send({userId: 1})
        .expect(200)
        .expect("content-type", "text/html; charset=utf-8")
        .end((err, res) => {
            t.error(err);
            t.end();
        });
});