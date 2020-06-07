
const serverResponse = require("../../../tools/serverResponse");
const { getChat,add } = require("../../../model/messages.model");




exports.get = async (req, res) => {

    let {recipUserId} = req.params
    let {userId} = res;

    if (userId === undefined)
        return serverResponse.sendError(res, {message: "user must log in first in order to precede"})


    try {
        let chat = await getChat(userId, recipUserId,req.query)
        serverResponse.sendData(res, {data: chat})
    } catch (e) {
        serverResponse.sendError(res, {message: e.message})
    }

}






exports.post =async (req, res) => {
    //NEED TO DECIDE HOW TO GET THIS INFO

    let {userId} = res;
    let {recipUserId} = req.params;

    if (userId === undefined)
        return serverResponse.sendError(res, {message: "user must log in first in order to precede"})

    try {

        let chats = await add(userId, recipUserId, req.body)
        serverResponse.sendData(res, {data: chats})

    } catch (e) {
        serverResponse.sendError(res, {message: e.message})
    }

}