const serverResponse = require("../../../tools/serverResponse")
const { getRelationshipStatusBetween, setRelationshipStatus } = require('../../../model/relationships.model');

// Get relationship status between user and candidate
exports.get = async (req, res) => {
    let { candidateId } = req.params;
    let { userId } = req.userId || req.body

    if (!userId || !candidateId) return res.json({ status: 404, message: "invalid params were provided" })

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
    let { userId, status } = req.body;
    userId = req.userId || userId;//TODO: remove the "|| userId;
    if (!userId || !candidateId)
        return res.json({ status: 404, message: "invalid params were provided" })

    let relationshipStatus = await setRelationshipStatus(userId, candidateId, status);

    res.json({ status: 200, data: relationshipStatus });
}