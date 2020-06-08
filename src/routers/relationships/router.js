const router = require('express').Router();
const serverResponse = require("../../tools/serverResponse")

const matches = require('./routes/matches')
const relationship = require('./routes/relationship')
const relationshipsModel = require('../../model/relationships.model')

/////////////////////////////// RELATIONSHIPS ////////////////////////////////////

// Get all relationships where user and candidates both like each other
router.get('/matches', matches.get)

// Get all relationships where user and candidates both like each other
router.get('/othersSelection', async (req,res)=>{
    let { userId } = res
    try {
        let candidatesThatAreSelected = await relationshipsModel.getRelationshipsWhereCandidateSelected(null, userId);
        serverResponse.sendData(res, { data: candidatesThatAreSelected })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.get('/othersSelection/:status', async (req,res)=>{
    let { status } = req.params
    let { userId } = res;
    try {
        let candidatesThatAreSelected = await relationshipsModel.getRelationshipsWhereCandidateSelected(status, userId);
        serverResponse.sendData(res, { data: candidatesThatAreSelected })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.get('/userSelection', async (req,res)=>{
    let { userId } = res
    try {
        let candidatesThatAreSelected = await relationshipsModel.getRelationshipWhereUserSelected(null, userId);
        serverResponse.sendData(res, { data: candidatesThatAreSelected })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.get('/userSelection/:status', async (req,res)=>{
    let { status } = req.params
    let { userId } = res
    try {
        let candidatesThatAreSelected = await relationshipsModel.getRelationshipWhereUserSelected(status, userId);
        serverResponse.sendData(res, { data: candidatesThatAreSelected })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

// Get and set relationship status between user and specified candidate
router.route('/:candidateId')
    .get(relationship.get)
    .post(relationship.post);


router.route('/:candidateId/:status')
    .post(relationship.postRoute);

module.exports = router;