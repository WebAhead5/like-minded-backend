const router = require('express').Router();
const serverResponse = require("../../tools/serverResponse")

const matches = require('./routes/matches')
const relationship = require('./routes/relationship')
const relationshipStatuses = require('./routes/relationshipStatuses')
const relationshipsModel = require('../../model/relationships.model')
const quizzesModel = require('../../model/quizzes.model')

///////////////////// QUIZZES /////////////////////////////////

router.get('/quizzes', async (req,res)=>{
    let { userId } = req.userId || req.body
    try {
        let quizzesData = await quizzesModel.getQuizzesData(userId)
        serverResponse.sendData(res, { data: quizzesData })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.post('/quizzes/question/:questionId', async (req,res)=>{
    let { questionId } = req.params;
    let { userId } = req.userId || req.body;
    let {userAnswer} = req.body;
    try {
        let quizQuestionPosted = await quizzesModel.setAnswer(userId, questionId, userAnswer)
        serverResponse.sendData(res, { data: quizQuestionPosted })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.get('/quizzesResults/:quizTitle', async (req,res)=>{
    let { quizTitle } = req.params;
    let { userId } = req.userId || req.body   
    try {
        let quizResults = await quizzesModel.getQuizResult(userId, quizTitle)
        serverResponse.sendData(res, { data: quizResults })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.get('/quizzesMatch', async (req,res)=>{
    let { userId } = req.userId || req.body  
     let {candidateId, quizType} = req.body;
    try {
        let quizResults = await quizzesModel.getQuizzesMatchResults(userId, candidateId, quizType)
        serverResponse.sendData(res, { data: quizResults })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

/////////////////////////////// RELATIONSHIPS ////////////////////////////////////

// Get and set relationship status between user and specified candidate
router.route('/relationship/:candidateId')
    .get(relationship.get)
    .post(relationship.post);

router.route('/relationship/:candidateId/:status')
    .post(relationship.postRoute);

// Get relationship statuses for user and all candidates.
router.get('/relationshipStatuses', relationshipStatuses.get)

// Get all relationships where user and candidates both like each other
router.get('/relationship/matches', matches.get)

// Get all relationships where user and candidates both like each other
router.get('/relationship/othersSelection', async (req,res)=>{
    let { userId } = res
    try {
        let candidatesThatAreSelected = await relationshipsModel.getRelationshipsWhereCandidateSelected(null, userId);
        serverResponse.sendData(res, { data: candidatesThatAreSelected })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.get('/relationship/othersSelection/:status', async (req,res)=>{
    let { status } = req.params
    let { userId } = res;
    try {
        let candidatesThatAreSelected = await relationshipsModel.getRelationshipsWhereCandidateSelected(status, userId);
        serverResponse.sendData(res, { data: candidatesThatAreSelected })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.get('/relationship/userSelection', async (req,res)=>{
    let { userId } = res
    try {
        let candidatesThatAreSelected = await relationshipsModel.getRelationshipWhereUserSelected(null, userId);
        serverResponse.sendData(res, { data: candidatesThatAreSelected })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.get('/relationship/userSelection/:status', async (req,res)=>{
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
router.route('/relationship/:candidateId')
    .get(relationship.get)
    .post(relationship.post);


router.route('/relationship/:candidateId/:status')
    .post(relationship.postRoute);

module.exports = router;