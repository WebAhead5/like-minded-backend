let tape = require('tape')
const _tape = require('tape-promise').default;
tape = _tape(tape)
const resetDatabase = require('../../database/dbbuild');

const testObjects = require('../test-objects')
const userProfileQueries = require('../../model/userProfile.model');

tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});

////////////////// VALID INPUT TESTS //////////////////////////////////

tape('test userProfile.get with valid userId = 1', async t=> {
    await resetDatabase();
    let userId = 1
    let response = await userProfileQueries.get(userId)    
    
    let actual = response
    let expected = testObjects.userProfile
    t.deepEqual(actual, expected)
    t.end()
})


tape('test userProfile.update with valid userId = 1', async t=> {
    await resetDatabase();
    let userId = 1
    let fields = {"firstname": "Gary", "lastname": "Sideways", "gender": 'male'}
    let response = await userProfileQueries.update(userId, fields)    
    let actual = response
    let expected = { message: 'userProfile updated successfully' }
    t.deepEqual(actual, expected)
    t.end()
})

tape('test userProfile.delete with valid userId = 1', async t=> {
    await resetDatabase();
    let userId = 1
    let response = await userProfileQueries.delete(userId)    
    let actual = response
    let expected = {message: "userProfile deleted successfully"}
    t.deepEqual(actual, expected)
    t.end()
})

tape('test userProfile.update with valid userId = 1', async t=> {
    await resetDatabase();
    let userId = 1
    let fields = {"firstname": "Gary", "lastname": "Sideways", "gender": 'male'}
    let response = await userProfileQueries.add(fields)    
    let actual = response
    let expected = {message: "userProfile created successfully"}
    t.deepEqual(actual, expected)
    t.end()
})

////////////////// INVALID INPUT TESTS //////////////////////////////////