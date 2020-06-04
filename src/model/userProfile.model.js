const db = require("../database/dbconnection")

// Get user profile data from userId
exports.get = async (userId) => {
    let result;
    try {
        result = await db.query("select * from userprofile where id = $1", [userId])
    } catch (e) {
        console.error("userProfile.model.get", e)
        throw e;
    }
    if (result.rows.length === 0)
        throw new Error("user not found")
    return result.rows[0];
}

// Set user profile data with userId and updated fields.
exports.update = async (userId, fields) => {
    if (!fields) throw Error("No fields provided");
    if (isNaN(userId)) throw Error("userId is not a number");

    let keys = Object.keys(fields);
    let values = Object.values(fields);
    let columnNames = ["firstname", "lastname", "gender", "status", "bio", "job", "livingin", "primaryphoto"]

    if (keys.some(key => !columnNames.includes(key.toLowerCase())
    )) {
        throw Error("invalid field provided")
    }

    try {
        let sqlCommand = `update userProfile set ${keys.map((key, index) => `${key} = $${index + 2}`).join(" , ")} where userid = $1  `;
        // update userProfile set firstname = $3, lastname = $4 where userid = $1 
        await db.query(sqlCommand, [userId, ...values])
        return { message: "userProfile updated successfully" }
    } catch (error) {
        throw error
    }

}

// Delete user profile with userId
exports.delete = async (userId) => {
    await db.query(`delete from userProfile where userId = $1`, [userId])
    return { message: "userProfile deleted successfully" }
}

// Add user with userId and form information.
exports.add = async (fields) => {
    if (!fields) throw Error("No fields provided");
    //if (isNaN(userId)) throw Error("userId is not a number");
    let columnNames = ["firstname", "lastname", "gender", "status", "bio", "job", "livingin", "primaryphoto"];
    let columnNamesVital = ["firstname", "lastname", "gender"];

    let keys = Object.keys(fields).map(key => key.toLowerCase());
    let values = Object.values(fields);

    if (!columnNamesVital.every(vitalColumn => keys.includes(vitalColumn))) {
        throw Error("invalid or no vital field provided")
    }

    if (keys.some(key => !columnNames.includes(key))) {
        throw Error("invalid field provided")
    }

    try {
        let sqlCommand = `INSERT into userProfile ( ${keys.map((key) => `${key}`).join(" , ")} ) values ( ${keys.map((key, index) => `$${index + 1}`).join(" , ")} )`;
        await db.query(sqlCommand, [...values])
        return { message: "userProfile created successfully" }
    } catch (error) {
        console.error(error);
        throw error;
    }


}

// insert into userprofile(userId, firstName, lastName , gender, status, bio, primaryPhoto) values ($1,$2,$3,$4,$5,$6,$7)