const express = require('express');
const router = express.Router();
const messagesQueries = require('../../model/messages.model')

router.get('/messages', async (req, res) => {
    //NEED TO DECIDE HOW TO GET THIS INFO
    let { userId, recipUserId } = req.params
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