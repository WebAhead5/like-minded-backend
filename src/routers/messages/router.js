
const express = require('express');
const router = express.Router();


const messagesRoute = require("./routes/messages")
const messagesWithRecipRoute = require("./routes/messagesWithRecip")
const deleteMessageRoute = require("./routes/deleteMessage")

// Get all chats where user and candidates both like each other
router.get('/', messagesRoute.get)


router.route('/delete/:messageId')
    .delete(deleteMessageRoute.post )
    .post(deleteMessageRoute.post)



router.route('/:recipUserId' )

    // Get messages between userId and recipUserId
    .get(messagesWithRecipRoute.get)

    //send a message to someone
    .post(messagesWithRecipRoute.post )



module.exports = router;