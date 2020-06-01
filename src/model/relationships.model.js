const db = require('../database/dbconnection')

// INCOMPLETE
exports.getExistingMatches = async (userId) =>{
    db.query(`SELECT * FROM "userRelationship" WHERE "userId1" = $1 AND "user1-towards-user2" = 'like' AND "user2-towards-user1" = 'like' 
    OR "userId2" = $1 AND "user1-towards-user2" = 'like' AND "user2-towards-user1" = 'like'`, [userId])
}


exports.getPotentialMatches = async (userId)=>{
    // BIT STUCK ON HOW WE WANT TO PROGRESS WITH THIS. I THINK 5th COLUMN SHOULD BE DELETED.
    db.query(`SELECT * FROM "userRelationship" WHERE "userId1" = $1 AND "user1-towards-user2" = 'none'
    OR "userId2" = $1 AND "user2-towards-user1" = 'none'`, [userId])
}

//INCOMPLETE - STILL TWO MORE QUERIES IN PLAN THAT WE NEED TO ADD HERE