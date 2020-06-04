const router = require('express').Router();
const serverResponse = require("../../tools/serverResponse")

const matches = require('./routes/matches')
const relationship = require('./routes/relationship')
const relationshipStatuses = require('./routes/relationshipStatuses')
const relationshipsModel = require('../../model/relationships.model')

// Get and set relationship status between user and specified candidate
router.route('/relationship/status/:candidateId')
    .get(relationship.get)
    .post(relationship.post);

// Get relationship statuses for user and all candidates.
router.get('/relationshipStatuses', relationshipStatuses.get)

// Get all relationships where user and candidates both like each other
router.get('/relationship/matches', matches.get)

router.get('/relationship/userSelection', async (req,res)=>{
    let { status } = req.body
    let { userId } = req.userId || req.body
    try {
        let candidatesThatAreSelected = await relationshipsModel.getRelationshipWhereUserSelected(status, userId);
        serverResponse.sendData(res, { data: candidatesThatAreSelected })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }

})


module.exports = router;