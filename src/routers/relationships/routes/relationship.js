
const { getRelationshipStatusBetween, setRelationshipStatus } = require('../../../model/relationships.model');

// Get relationship status between user and candidate
exports.get = async (req, res) => {
    let { candidateId } = req.params;
    let {userId} = req.body;
    if (!userId || !candidateId)
        return res.json({ status: 404, message: "invalid params were provided" })
    userId = 1; candidateId=2;
    let relationshipStatus = await getRelationshipStatusBetween(userId, candidateId);

    res.json({ status: 200, data: relationshipStatus })
}

// Set relationship status between user and candidate
exports.post = async (req, res) => {
    let { candidateId } = req.params;
    let {  userId, status } = req.body; 
         userId =  req.userId || userId;//TODO: remove the "|| userId;
    if (!userId || !candidateId)
        return res.json({ status: 404, message: "invalid params were provided" })

    let relationshipStatus = await setRelationshipStatus(userId, candidateId, status);

    res.json({ status: 200, data: relationshipStatus });
}