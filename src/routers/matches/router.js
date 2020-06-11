
const router = require('express').Router();
const serverResponse = require("../../tools/serverResponse")
const matchesModel = require('../../model/matches.model')

router.get('/', async (req,res)=>{
    let userId = res.userId;
    if (process.env.NODE_ENV !== 'production')
    userId = userId || req.body.userId;
    let {count, offset} = req.params;
    console.log("/matches route params:",count,offset);
    
    try {
        let getPotentialMatches = await matchesModel.getPotentialMatches(userId) //need to add options
        serverResponse.sendData(res, { data: getPotentialMatches })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

module.exports = router;