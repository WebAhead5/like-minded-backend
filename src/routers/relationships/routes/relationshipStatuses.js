const {getRelationshipWhereUserSelected,getRelationshipsWhereCandidateSelected} = require('../../../model/relationships.model');

exports.get = async(req,res)=>{
    let {selectedBy,selectedFor} = req.params

if((!selectedBy && !selectedFor) ||  (selectedFor && selectedBy))
    return res.json({status: 404 , message: "invalid argument provided"})

    let result ;
    if(selectedBy)
      result = await getRelationshipWhereUserSelected(parseInt(selectedBy))

    else if(selectedFor)
      result = await getRelationshipsWhereCandidateSelected(parseInt(selectedFor))

    res.json({status:200 , data: result})
}