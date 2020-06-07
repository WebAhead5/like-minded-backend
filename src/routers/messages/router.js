
const express = require('express');
const router = express.Router();


const messagesRoute = require("./routes/messages")
const messagesWithRecipRoute = require("./routes/messagesWithRecip")
const deleteMessageRoute = require("./routes/deleteMessage")

// Get all chats where user and candidates both like each other
router.get(['/messages','/chats'], messagesRoute.get)


router.route(['/messages/:recipUserId','/chat/:recipUserId' ])

    // Get messages between userId and recipUserId
    .get(messagesWithRecipRoute.get)

    //send a message to someone
    .post(messagesWithRecipRoute.post )


router.route('/deleteMessage/:messageId')
    .delete(deleteMessageRoute.post )
    .post(deleteMessageRoute.post)



module.exports = router;