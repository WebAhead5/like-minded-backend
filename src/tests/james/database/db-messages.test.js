let tape = require('tape')
const _tape = require('tape-promise').default;
tape = _tape(tape)
const testObjects = require('../test-objects')
const resetDatabase = require('../../../database/dbbuild');

const messagesQueries = require('../../../model/messages.model');

tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});

tape('get all messages when userId=1 and otherUserId=2', async t => {
    resetDatabase();
    let userId = 1
    let otherUserId = 2
    let queryResponse = await messagesQueries.get(userId, otherUserId)
    let expected = testObjects.message1.message;
    t.deepEqual(queryResponse[0].message, expected)
    t.end()
})

tape('test messagesQueries.add where correct values provided', async t => {
    resetDatabase();
    let userId = 1
    let otherUserId = 2
    let message = "Yo Yo Yo this is a message from testing"
    let timeanddate = new Date()
    let queryResponse = await messagesQueries.add(userId, otherUserId, message, timeanddate)
    let expected = queryResponse;
    t.deepEqual(undefined, expected)
    t.end()
})

tape('test messagesQueries.delete where correct values provided', async t => {
    resetDatabase();
    let messageId = 1
    let queryResponse = await messagesQueries.delete(messageId)
    let expected = queryResponse;
    t.deepEqual(undefined, expected)
    t.end()
})