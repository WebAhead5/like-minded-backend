const serverResponse = require("../../../tools/serverResponse");
const {getAllChatsWith, add} = require("../../../model/messages.model");

exports.get = async (req, res) => {

    let {userId} = res;

    if (userId === undefined)
        return serverResponse.sendError(res, {message: "user must log in first in order to precede"})

    try {
        let existingMatches = await getAllChatsWith(userId);
        serverResponse.sendData(res, {data: existingMatches})
    } catch (e) {
        serverResponse.sendError(res, {message: e.message})
    }


}


