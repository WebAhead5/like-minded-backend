const serverResponse = require("../../../tools/serverResponse")
const { getRelationshipStatusBetween, setRelationshipStatus } = require('../../../model/relationships.model');

// Get relationship status between user and candidate
exports.get = async (req, res) => {
    let { candidateId } = req.params;
    let { userId } = res

    try {
        let relationshipStatus = await getRelationshipStatusBetween(userId, candidateId);
        serverResponse.sendData(res, { data: relationshipStatus })
    } catch (error) {
        serverResponse.sendError(res, { message: error.message })
    }
}

// Set relationship status between user and candidate
exports.post = async (req, res) => {
    let { candidateId } = req.params;
    let { status } = req.body;
    let  userId = res.userId;


    try {
         await setRelationshipStatus(userId, candidateId, status);
        serverResponse.sendData(res, { message: "updated successfully" })

    } catch (e) {
        serverResponse.sendError(res, { message: e.message })

    }
}

exports.postRoute = async (req, res) => {
    let { candidateId,status } = req.params;
    let  userId = res.userId;


    try {
        await setRelationshipStatus(userId, candidateId, status);
        serverResponse.sendData(res, { message: "updated successfully" })

    } catch (e) {
        serverResponse.sendError(res, { message: e.message })

    }
}