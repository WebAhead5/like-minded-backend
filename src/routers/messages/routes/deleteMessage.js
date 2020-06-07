
const serverResponse = require("../../../tools/serverResponse");
const { delete:deleteMessage, getMessageData } = require("../../../model/messages.model");


exports.post = async (req, res) => {
    let {messageId} = req.params;
    let {userId} = res;

    if (userId === undefined)
        return serverResponse.sendError(res, {message: "user mist log in first in order to precede"})

    try {
        //validate message sender if it matches to teh currently logged in user
        let messageData = await getMessageData(messageId);
        if (messageData.senderId !== userId)
            throw new Error("unauthorized - message was not sent by the logged in user")

        //delete the message
        await deleteMessage(messageId);
        serverResponse.sendData(res, {message: "deleted successfully"})


    } catch (e) {
        serverResponse.sendError(res, {message: e.message})
    }


}