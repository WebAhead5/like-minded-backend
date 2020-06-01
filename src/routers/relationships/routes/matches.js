const { getAllMatchesWith } = require('../../../model/relationships.model');

// Get all relationships where user and candidates both like each other
exports.get = async (req, res) => {
    let { userId } = req.query;
    userId = parseInt(userId);
    
    let existingMatches = await getAllMatchesWith(userId);

    res.json({ status: 200, data: existingMatches })
}