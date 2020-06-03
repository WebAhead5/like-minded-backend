const router = require('express').Router();
const serverResponse = require("../../tools/serverResponse")

const matches = require('./routes/matches')
const relationship = require('./routes/relationship')
const relationshipStatuses = require('./routes/relationshipStatuses')
const relationshipsModel = require('../../model/relationships.model')

// Get relationship statuses for user and all candidates.
router.get('/relationshipStatuses', relationshipStatuses.get)

// Get all relationships where user and candidates both like each other
router.get('/relationship/matches', matches.get)

router.get('/relationship/userSelection', async (req,res)=>{
    let { userId, status } = req.body
    try {
        let candidatesThatAreSelected = await relationshipsModel.getRelationshipWhereUserSelected(userId, status);
        res.json({ status: 200, data: candidatesThatAreSelected })
    } catch (error) {
        console.error("relationship/userSelection",error);
        throw error;
    }

})

// Get and set relationship status between user and candidate
router.route('/relationship/status/:candidateId')
    .get(relationship.get)
    .post(relationship.post);

module.exports = router;