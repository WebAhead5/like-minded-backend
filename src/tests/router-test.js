const test = require("tape");
const supertest = require("supertest");
const router = require("../app");

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


test("route to get user profile info with userId", t => {
    supertest(router)
        .get("/userProfile/1")
        .expect(200)
        .expect("content-type", "application/json; charset=utf-8")
        .end((err, res) => {
            console.log(res.body);
            
            t.error(err);
            t.end();
        });
});