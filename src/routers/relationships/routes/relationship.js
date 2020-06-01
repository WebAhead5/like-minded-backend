
const {getRelationshipStatusBetween,setRelationshipStatus} = require('../../../model/relationships.model');

exports.get = async(req,res)=>{
    let {userOne, userTwo} = req.query;

    if(!userOne || !userTwo)
        return res.json({status: 404 , message:"invalid params were provided"})

    let relationshipStatus =  await getRelationshipStatusBetween(userOne,userTwo);

    res.json({status:200, data: profile})



}


exports.post = async(req,res)=>{
    let {userOne, userTwo,status} = req.query;

    if(!userOne || !userTwo)
        return res.json({status: 404 , message:"invalid params were provided"})

    await setRelationshipStatus(userOne,userTwo,status);
    
    res.json({status:200, data: profile})



}