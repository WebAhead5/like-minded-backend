const express = require('express');
const router = require(express.Router());
const relationshipQuery = require('../../model/relationships.model');

//NOT REALLY CLEAR WHAT /ROUTE WE ARE USING FOR EACH REQUEST
router.getExistingMatches('/relationship', async(req,res)=>{
    let {userId} = req.params
    let existingMatches = relationshipQuery.getExistingMatches(userId)
    res.json({status:200, data:profile})
})

router.getPotentialMatches('/relationship', async(req,res)=>{
    let {userId} = req.params
    let matches = relationshipQuery.getPotentialMatches(userId)
    res.json({status:200 , data: profile})
})

//THERE ARE TWO MORE ROUTES TO GO IN HERE

module.exports = router;