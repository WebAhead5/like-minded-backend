const tape = require('tape')
const _tape = require('tape-promise').default;
const test = _tape(tape)
const resetDatabase = require('../../../database/dbbuild');
const dbCon = require('../../../database/dbconnection');
const userProf = require('../../../model/userProfile.model');


async function insertDummyProfile(){

        let  userId = await dbCon.query("insert into auth (id,email, password, \"googleId\") values (500,'...','...','...') returning id");
        userId = userId.rows[0].id;


        let res = await dbCon.query(`
        
        
        INSERT INTO userprofile
        (userId,firstName, lastName, gender, status, bio, job, livingin, primaryphoto, subphotos)
        VALUES
         (
            ${userId} ,
             'James', 
             'Daniels', 
             'male', 
             'Single',
             'Learning web-dev in the blazing Haifa heat.', 
             'Web-Developer', 
             'Haifa', 
             'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4',
             array ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4','https://avatars2.githubusercontent.com/u/51966598?s=60&v=4','https://avatars2.githubusercontent.com/u/51966598?s=60&v=4']
         )
          returning *`);
    res.rows[0].id = undefined;
   return res.rows[0]
}


test("userProfile.model.js tests----------------------------------------------------------------", t=>{
    t.ok(true, "tape working")
    t.end();
})

test("userProfile.get - valid + existing - user id", async  t => {
    try {
        await resetDatabase()

        //insert a user into the db
        let expected = await insertDummyProfile()

        //get the user back
        let result = await userProf.get(expected.userid);
        t.ok(result, "got a value back");

        t.deepEqual(expected, result, "added userProfile equals returned profile id");


    } catch (e) {
        t.error(e, "no errors");
    }
    t.end()

})

test("userProfile.get - invalid type - user id", async  t => {
    try {
        await resetDatabase()
        let result = await userProf.get("w");
        t.error(result, "throws an error" );

    } catch (e) {
        t.ok(e, "throws an error - " + e.message);
    }
    t.end()
})

test("userProfile.get - valid + non-existing - user id", async  t => {
    try {
        await resetDatabase()
        let result = await userProf.get(20);
        t.error(result, "throws an error" );

    } catch (e) {
        t.ok(e, "throws an error - " + e.message);
    }
    t.end()

})
