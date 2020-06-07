const { getAllMatchesWith } = require('../../../model/relationships.model');
const serverResponse = require("../../../tools/serverResponse")

// Get all relationships where user and candidates both like each other
exports.get = async (req, res) => {

    let { userId } = res;

    try {
        let existingMatches = await getAllMatchesWith(userId);
        serverResponse.sendData(res,{ data: existingMatches })

    } catch (e) {
        serverResponse.sendData(res,{ message: e.message })

    }

}