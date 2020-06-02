const messagesQueries = require('../../model/messages.model')
const { getAllMatchesWith } = require('../../model/relationships.model');
const express = require('express');
const serverResponse = require("../../tools/serverResponse")
const router = express.Router();




// Get all relationships where user and candidates both like each other
router.get('/messages', async (req, res) => {
    // let { userId } = req.query;
    // console.log(req.body); 
    // let {userId} = req.body
    // userId = parseInt(userId);
    let userId = 1
    let existingMatches = await getAllMatchesWith(userId);
    res.json({ status: 200, data: existingMatches })
})

// Get messages between userId and recipUserId
router.get('/messages/:recipUserId', async (req, res) => {
    //NEED TO DECIDE HOW TO GET THIS INFO
    let { recipUserId } = req.query
    let { userId } = req.body
    let messagesData = await messagesQueries.get(userId, recipUserId)
    res.json({ status: 200, data: messagesData })
})

router.post('/messages', async (req, res) => {
    //NEED TO DECIDE HOW TO GET THIS INFO
    let { userId, recipUserId, message, timeAndDate } = req.params;
    let postedMessage = await messagesQueries.add(userId, recipUserId, message, timeAndDate)

    // DO WE NEED TO RESPOND WITH ANYTHING?
    res.json({ status: 200, data: postedMessage })
})

router.delete('messages', async (req, res) => {
    let messageId = req.params.id
    let deletedMessage = await messagesQueries.delete(messageId);

    // DO WE NEED TO RESPOND WITH ANYTHING?
    res.json({ status: 200, data: postedMessage })
})

module.exports = router;