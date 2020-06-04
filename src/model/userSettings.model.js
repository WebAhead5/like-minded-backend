const db = require("../database/dbconnection")

//  retrieve the user settings of the provided user id
exports.get = async (userId) => {
    let result;
    try {
        result = await db.query("select * from userSettings where id = $1", [userId])
    } catch (e) {
        console.error("userSettings.model.get", e)
        throw e;
    }
    if (result.rows.length === 0)
        throw new Error("user not found")
    return result.rows[0];
}

// Set user Settings data with userId and updated fields.add( { interestedIn, maxDistance, ageMin, ageMax, agePrivate, userLocation } )
exports.update = async (userId, fields) => {
    console.log(userId, fields);
    

    if (!fields) throw Error("No fields provided");
    if (isNaN(userId)) throw Error("userId is not a number");
    //let exampleObject = { interestedIn: "male", maxDistance: 23, ageMin: 26, ageMax: 33, agePrivate: true, userLocation: "Haifa, Israel" }
    let keys = Object.keys(fields)
    let columnNames = ["interestedIn", "maxDistance", "ageMin", "ageMax", "agePrivate", "userLocation"]
    
    if (keys.some(key =>!columnNames.includes(key)
    )) {
        throw Error("invalid field provided")
    }
    try {
            let sqlCommand = `update userSettings set ${keys.map((key,index)=>`${key} = $${index+2}`).join(" , ")} where userid = $1  `;
            console.log(sqlCommand)
            await db.query(sqlCommand, [userId, ...q ])

    } catch (error) {
        throw error
    }
// await db.query( ` update userSettings set ('interestedIn', 'maxDistance') ($2, $3) where userid = $1`) [ 1, 'male', 23]
}

// Delete user profile with userId
exports.delete = async (userId) => {
    await db.query(`delete from userSettings where userId = $1`, [userId])
}

// Add userSettings with userId and form information.
exports.add = async ({ userId, interestedIn, maxDistance, ageMin, ageMax, agePrivate, userLocation }) => {
    await db.query(`insert into userSettings(userId, interestedIn, maxDistance, ageMin, ageMax, agePrivate, userLocation) values ($1,$2,$3,$4,$5,$6,$7)`, [userId, interestedIn, maxDistance, ageMin, ageMax, agePrivate, userLocation])
}