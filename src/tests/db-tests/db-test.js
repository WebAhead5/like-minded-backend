let tape = require('tape')
const _tape = require('tape-promise').default;
tape = _tape(tape)

const {getAllMatchesWith} = require('../../model/relationships.model');
const userProfileQueries = require('../../model/userProfile.model');

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

tape('userProfile.model.update', async t=> {
    let userId = 1
    let fields = {firstname: "Joe"};
    try {
        let response = await userProfileQueries.update(userId, fields)
        t.equals(response, undefined)
    } catch (error) {
        t.error(error, "possibly bad object input?")
    }
    t.end()
})