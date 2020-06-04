let tape = require('tape')
const _tape = require('tape-promise').default;
tape = _tape(tape)
const resetDatabase = require('../../database/dbbuild');

const relationshipsQueries = require('../../model/relationships.model');
const userProfileQueries = require('../../model/userProfile.model');
const testObjects = require('../test-objects')

tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});

////////////////// VALID INPUT TESTS //////////////////////////////////

tape('relationships.model.getRelationshipStatusBetween with valid userId and candidateId', async t => {
    await resetDatabase();
    let userId = 1
    let candidateId = 2;
    try {
        let response = await relationshipsQueries.getRelationshipStatusBetween(userId, candidateId)
        let expected = { isMatch: true, isBlock: false, theirSelection: 'like', yourSelection: 'like' }
        let actual = response
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

tape('test relationships.getAllMatchesWith a valid id', async t => {
    await resetDatabase();
    let userId = 1
    let response = await relationshipsQueries.getAllMatchesWith(userId)
    // let actual = response[0].bounty
    // let expected = 500
    actual = response
    let expected = testObjects.getAllMatchesWith;
    t.deepEqual(actual, expected)
    t.end()
})

tape('relationships.model.getRelationshipWhereUserSelected with valid userId and status', async t => {
    await resetDatabase();
    let userId = 1
    let status = 'like'
    try {
        let response = await relationshipsQueries.getRelationshipWhereUserSelected(status, userId)
        let expected = testObjects.getRelationshipWhereUserSelected
        let actual = response[0]
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

tape('relationships.model.getRelationshipsWhereCandidateSelected with valid userId and status', async t => {
    await resetDatabase();
    let userId = 3
    let status = 'like'
    try {
        let response = await relationshipsQueries.getRelationshipsWhereCandidateSelected(status, userId)
        let expected = testObjects.getRelationshipWhereCandidateSelected
        let actual = response[0]
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

tape('relationships.model.setRelationshipStatus with valid userId, candidateId, and new status', async t => {
    await resetDatabase();
    let userId = 1
    let candidateId = 2;
    let status = 'block'
    try {
        let response = await relationshipsQueries.setRelationshipStatus(userId, candidateId, status)
        let expected =   { isMatch: false, isBlock: true, theirSelection: 'like', yourSelection: 'block' }
        let actual = response
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

////////////////// INVALID INPUT TESTS //////////////////////////////////