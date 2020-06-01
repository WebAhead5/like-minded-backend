const router = require('express').Router();

const matches = require('./routes/matches')
const relationship = require('./routes/relationship')
const relationshipStatuses = require('./routes/relationshipStatuses')

// Get all relationships where user and candidates both like each other
router.get('/relationship/matches',matches.get )

// Get and set relationship status between user and candidate
router.route('/relationship')
    .get(relationship.get)
    .post(relationship.post);

// Get relationship statuses for user and all candidates.
router.get('/relationshipStatuses',relationshipStatuses.get )

module.exports = router;