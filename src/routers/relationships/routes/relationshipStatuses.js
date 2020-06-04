const { getRelationshipWhereUserSelected, getRelationshipsWhereCandidateSelected } = require('../../../model/relationships.model');

// Get relationship statuses for user and all candidates.
exports.get = async (req, res) => {
  let { candidateId } = req.params
  let { userId, status } = req.body

  if ((!userId && !candidateId) || (candidateId && userId))
    return res.json({ status: 404, message: "invalid argument provided" })

  let result;
  if (userId)
    result = await getRelationshipWhereUserSelected(parseInt(userId, status))

  else if (candidateId)
    result = await getRelationshipsWhereCandidateSelected(parseInt(candidateId, status))

  res.json({ status: 200, data: result })
}