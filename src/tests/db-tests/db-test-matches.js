let tape = require('tape')
const _tape = require('tape-promise').default;
tape = _tape(tape)
const resetDatabase = require('../../database/dbbuild');

const matchesQueries = require('../../model/matches.model');
const testObjects = require('../james/test-objects')

tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});

////////////////// VALID INPUT TESTS //////////////////////////////////

tape('matches.model.getPotentialMatches with valid userId', async t => {
    await resetDatabase();
    let userId = 1
    try {
        let response = await matchesQueries.getPotentialMatches(userId)
        let expected = testObjects.getPotentialMatches
        let actual = response
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

////////////////// INVALID INPUT TESTS //////////////////////////////////

tape('matches.model.getPotentialMatches with invalid userId', async t => {
    await resetDatabase();
    let userId = "what"
    try {
        let response = await matchesQueries.getPotentialMatches(userId)
        let expected = testObjects.getPotentialMatches
        let actual = response
        t.error(true, "Test should have failed. Possibly bad object input?")
    } catch (error) {
        t.ok(error, "test failed as per expectations: " + error.message)
    }
    t.end()
})

////////////////// VALID INPUT TESTS WITH ALTERNATIVE ARGUMENTS AND SITUATIONS //////////////////////////////////

tape('matches.model.getPotentialMatches with valid userId =4', async t => {
    await resetDatabase();
    let userId = 4
    try {
        let response = await matchesQueries.getPotentialMatches(userId)
        let expected = 'quiz is incomplete'
        let actual = response[0].quizzesResults.candidatePersonalityType
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})

tape('matches.model.getPotentialMatches with valid userId = 7', async t => {
    await resetDatabase();
    let userId = 7
    try {
        let response = await matchesQueries.getPotentialMatches(userId)
        let expected = 'quiz is incomplete'
        let actual = response[0].quizzesResults.candidatePersonalityType;
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})
