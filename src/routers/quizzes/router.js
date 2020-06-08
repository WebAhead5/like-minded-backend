
const router = require('express').Router();
const serverResponse = require("../../tools/serverResponse")
const quizzesModel = require('../../model/quizzes.model')



router.get('/', async (req,res)=>{
    let userId = res.userId || req.body.userId;
    try {
        let quizzesData = await quizzesModel.getQuizzesData(userId)
        serverResponse.sendData(res, { data: quizzesData })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.post('/question/:questionId', async (req,res)=>{
    let { questionId } = req.params;
    let userId = res.userId || req.body.userId;
    let {userAnswer} = req.body;
    try {
        let quizQuestionPosted = await quizzesModel.setAnswer(userId, questionId, userAnswer)
        serverResponse.sendData(res, { data: quizQuestionPosted })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.get('/results/:quizTitle', async (req,res)=>{
    let { quizTitle } = req.params;
    let userId = res.userId || req.body.userId;
    try {
        let quizResults = await quizzesModel.getQuizResult(userId, quizTitle)
        serverResponse.sendData(res, { data: quizResults })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

router.get('/match', async (req,res)=>{
    let { userId } = req.userId || req.body
    let {candidateId, quizType} = req.body;
    try {
        let quizResults = await quizzesModel.getQuizzesMatchResults(userId, candidateId, quizType)
        serverResponse.sendData(res, { data: quizResults })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})


module.exports = router;