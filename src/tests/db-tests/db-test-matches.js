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

tape('matches.model.getPotentialMatches with valid userId and candidateId', async t => {
    await resetDatabase();
    let userId = 1
    try {
        let response = await matchesQueries.getPotentialMatches(userId)
        let expected = {}
        let actual = response
        t.deepEquals(actual, expected)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})
