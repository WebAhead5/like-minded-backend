const db = require('../database/dbconnection')

// INCOMPLETE
exports.getExistingMatches = async (userId) =>{
    db.query(`SELECT * FROM "userRelationship" WHERE "userId1" = $1 AND "user1-towards-user2" = 'none'`, [userId])
}


exports.getPotentialMatches = async (userId)=>{
    // BIT STUCK ON HOW WE WANT TO PROGRESS WITH THIS. I THINK 5th COLUMN SHOULD BE DELETED.
    db.query(`SELECT * FROM "userRelationship" WHERE "userId1" = $1 AND "user1-towards-user2" = 'none'`, [userId])
}

//INCOMPLETE - STILL TWO MORE QUERIES IN PLAN THAT WE NEED TO ADD HERE