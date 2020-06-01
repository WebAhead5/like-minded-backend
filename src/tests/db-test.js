const {getAllMatchesWith} = require('../model/relationships.model');
const tape = require('tape')

tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});

tape('test relationships.getAllMatchesWith', async t=> {
    // let id = 2
    let userId = 1
    let response = await getAllMatchesWith(userId)
    // let actual = response[0].bounty
    // let expected = 500
    actual = response[0].userId1;
    
    let expected = 1;
    t.deepEqual(actual, expected)
    t.end()
})