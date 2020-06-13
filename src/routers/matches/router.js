
const router = require('express').Router();
const serverResponse = require("../../tools/serverResponse")
const matchesModel = require('../../model/matches.model')

router.get('/', async (req,res)=>{
    let userId = res.userId;
    if (process.env.NODE_ENV !== 'production')
    userId = userId || req.body.userId;
    let {count=undefined, offset=undefined} = req.query;

    try {
        let getPotentialMatches = await matchesModel.getPotentialMatches(userId,{count,offset}) //need to add options
        serverResponse.sendData(res, { data: getPotentialMatches })
    } catch (error) {
        serverResponse.sendError(res, {message: error.message })
    }
})

module.exports = router;