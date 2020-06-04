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

tape('test relationships.getAllMatchesWith a valid id', async t => {
    await resetDatabase();
    let userId = 1
    let response = await relationshipsQueries.getAllMatchesWith(userId)
    // let actual = response[0].bounty
    // let expected = 500
    actual = response[0].userId1;
    let expected = 1;
    t.deepEqual(actual, expected)
    t.end()
})

tape('relationships.model.getRelationshipStatusBetween with valid userId and candidateId', async t => {
    await resetDatabase();
    let userId = 1
    let candidateId = 2;
    try {
        let response = await relationshipsQueries.getRelationshipStatusBetween(userId, candidateId)
        let expected = testObjects.userRelationship1and2
        let actual = response[0]
        t.deepEquals(expected, actual)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

tape('relationships.model.getRelationshipStatusBetween with valid userId and candidateId', async t => {
    await resetDatabase();
    let userId = 1
    let candidateId = 2;
    let status = 'like'
    try {
        let response = await relationshipsQueries.setRelationshipStatus(userId, candidateId, status)
        let expected = { message: "relationship updated successfully"}
        let actual = response
        t.deepEquals(expected, actual)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

tape('relationships.model.getRelationshipWhereUserSelected with valid userId and status', async t => {
    await resetDatabase();
    let userId = 1
    let status = 'like'
    try {
        let response = await relationshipsQueries.getRelationshipWhereUserSelected(status, userId)
        let expected = testObjects.relationshipsWhereUserStatus
        let actual = response[0]
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

tape('relationships.model.getRelationshipsWhereCandidateSelected with valid userId and status', async t => {
    await resetDatabase();
    let userId = 1
    let status = 'like'
    try {
        let response = await relationshipsQueries.getRelationshipsWhereCandidateSelected(status, userId)
        let expected = testObjects.relationshipsWhereUserStatus
        let actual = response[0]
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})


////////////////// INVALID INPUT TESTS //////////////////////////////////