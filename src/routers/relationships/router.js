const router = require('express').Router();

const matches = require('./routes/matches')
const relationship = require('./routes/relationship')
const relationshipStatuses = require('./routes/relationshipStatuses')




router.get('/relationship/matches',matches.get )


router.route('/relationship')
    .get(relationship.get)
    .post(relationship.post)


router.get('/relationshipStatuses',relationshipStatuses.get )




module.exports = router;






module.exports = router;