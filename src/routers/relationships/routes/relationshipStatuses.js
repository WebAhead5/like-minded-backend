const { getRelationshipWhereUserSelected, getRelationshipsWhereCandidateSelected } = require('../../../model/relationships.model');
const serverResponse = require("../../../tools/serverResponse")


// Get relationship statuses for user and all candidates.
exports.get = async (req, res) => {
  let { candidateId } = req.params
  let { status } = req.body
  let {userId} = res



  let result;
  if (userId)
    result = await getRelationshipWhereUserSelected(parseInt(userId, status))

  else if (candidateId)
    result = await getRelationshipsWhereCandidateSelected(parseInt(candidateId, status))

  res.json({ status: 200, data: result })
}