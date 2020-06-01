const {getAllMatchesWith} = require('../../../model/relationships.model');

exports.get = async(req,res)=>{


     let {userId} = req.query;
     userId = parseInt(userId);


    let existingMatches = await getAllMatchesWith(userId)
    
    res.json({status:200, data:existingMatches})
}

