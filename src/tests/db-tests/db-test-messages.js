let tape = require('tape')
const _tape = require('tape-promise').default;
tape = _tape(tape)
const testObjects = require('../test-objects')
const resetDatabase = require('../../database/dbbuild');
const moment = require("moment")
const messagesQueries = require('../../model/messages.model');

tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});

tape('get all messages when userId=1 and otherUserId=2 and count = 2 and offset 1', async t => {
    await resetDatabase();
    let userId = 1
    let otherUserId = 2
    let queryResponse = await messagesQueries.getChat(userId, otherUserId, {count:2 ,offset:1})
    
    let actual = queryResponse.map(x => {
        let temp = { ...x }
        temp.timeAndDate = getDateWithoutMS(temp.timeAndDate)
        return temp;
    });
    let expected = testObjects.getChat.map(x => {
        let temp = { ...x }
        temp.timeAndDate = getDateWithoutMS(temp.timeAndDate)
        return temp;
    }).filter((x,id,arr)=> id!==0 );
    
    t.deepEqual(actual, expected)
    t.end()
})

tape('get all messages when userId=1 and otherUserId=2 and count = 2', async t => {
    await resetDatabase();
    let userId = 1
    let otherUserId = 2
    let count = 2
    let queryResponse = await messagesQueries.getChat(userId, otherUserId, {count})
    
    let actual = queryResponse.map(x => {
        let temp = { ...x }
        temp.timeAndDate = getDateWithoutMS(temp.timeAndDate)
        return temp;
    });
    let expected = testObjects.getChat.map(x => {
        let temp = { ...x }
        temp.timeAndDate = getDateWithoutMS(temp.timeAndDate)
        return temp;
    }).filter((x,id,arr)=> id!==arr.length-1 );

    t.deepEqual(actual, expected)
    t.end()
})

tape('get all messages when userId=1 and otherUserId=2', async t => {
    await resetDatabase();
    let userId = 1
    let otherUserId = 2
    let queryResponse = await messagesQueries.getChat(userId, otherUserId)
    
    let actual = queryResponse.map(x => {
        let temp = { ...x }
        temp.timeAndDate = getDateWithoutMS(temp.timeAndDate)
        return temp;
    });
    let expected = testObjects.getChat.map(x => {
        let temp = { ...x }
        temp.timeAndDate = getDateWithoutMS(temp.timeAndDate)
        return temp;
    });
    t.deepEqual(actual, expected)
    t.end()
})
function getDateWithoutMS(timeAndDate) {
    let temp = moment(timeAndDate)
    temp.set("millisecond", 0)
    return temp.toString();
}
// tape('get all messages when userId=1 and otherUserId=2', async t => {
//     resetDatabase();
//     let userId = 1
//     let otherUserId = 2
//     let queryResponse = await messagesQueries.get(userId, otherUserId)
//     let expected = testObjects.message1.message;
//     t.deepEqual(queryResponse[0].message, expected)
//     t.end()
// })

// tape('test messagesQueries.add where correct values provided', async t => {
//     resetDatabase();
//     let userId = 1
//     let otherUserId = 2
//     let message = "Yo Yo Yo this is a message from testing"
//     let timeanddate = new Date()
//     let queryResponse = await messagesQueries.add(userId, otherUserId, message, timeanddate)
//     let expected = queryResponse;
//     t.deepEqual(undefined, expected)
//     t.end()
// })

// tape('test messagesQueries.delete where correct values provided', async t => {
//     resetDatabase();
//     let messageId = 1
//     let queryResponse = await messagesQueries.delete(messageId)
//     let expected = queryResponse;
//     t.deepEqual(undefined, expected)
//     t.end()
// })





tape('get all matcheing profiles  when userId=1 ', async t => {
    await resetDatabase();
    let userId = 1
    let queryResponse = await (await messagesQueries.getAllChatsWith(userId)).map(x => {
        let temp = { ...x }
        temp.lastMessage.timeAndDate = getDateWithoutMS(temp.lastMessage.timeAndDate)
        return temp;
    })
    let actual = JSON.stringify(queryResponse);
    let expected = JSON.stringify(testObjects.getAllChatsWith.map(x => {
        let temp = { ...x }
        temp.lastMessage.timeAndDate = getDateWithoutMS(temp.lastMessage.timeAndDate)
        return temp;
    }));
    t.deepEqual(actual, expected)
    t.end()
})



tape('add message when provided "senderUserId", "recipUserId", "message","timeAndDate"  ', async t => {
    await resetDatabase();
    let userId = 1
    let recipUserId = 2
    let message = "this is db test message"
    let timeAndDate = new Date()

    let queryResponse = await messagesQueries.add(userId, recipUserId, message, timeAndDate)
    let actual = queryResponse
    let expected = testObjects.addMessages
    t.deepEqual(actual, expected)
    t.end()
})



tape('delete  message by messageid ', async t => {
    await resetDatabase();
    let messageId = 1

    let queryResponse = await messagesQueries.delete(messageId)
    let actual = queryResponse
    let expected = testObjects.deleteMessage
    t.deepEqual(actual, expected)
    t.end()
})
