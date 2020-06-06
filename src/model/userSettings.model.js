const db = require("../database/dbconnection")
const {checkNotNull, validateObjectFieldTypes ,checkObjectKeysPartOfArr, requireObjectKeys ,checkUserExists, checkUserIdType} = require("../tools/modelsInputValidators")

//  retrieve the user settings of the provided user id
exports.get = async (userId) => {


    checkUserIdType(userId);
    await checkUserExists(userId);


    let result = await db.query("select * from userSettings where id = $1", [userId])


    result.rows[0].id = undefined;
    return result.rows[0];
}

// Set user Settings data with userId and updated fields.add( { interestedIn, maxDistance, ageMin, ageMax, agePrivate, userLocation } )
exports.update = async (userId, fields) => {

    checkUserIdType(userId);
    await checkUserExists(userId);
    checkNotNull(fields);
    checkObjectKeysPartOfArr(fields, ["interestedIn", "maxDistance", "ageMin", "ageMax", "agePrivate", "userLocation"])
    validateObjectFieldTypes(fields);

    let keys = Object.keys(fields)

    let sqlCommand = `update userSettings set ${keys.map((key,index)=>`${key} = $${index+2}`).join(" , ")} where userid = $1  `;

    await db.query(sqlCommand, [userId, ...keys.map(key=>fields[key]) ])


}

// Delete user profile with userId
exports.delete = async (userId) => {

    checkUserIdType(userId);
    await checkUserExists(userId);

    await db.query(`delete from userSettings where userId = $1`, [userId])
}

// Add userSettings with userId and form information.
// exports.add = async ({ userId, interestedIn, maxDistance, ageMin, ageMax, agePrivate, userLocation }) => {
exports.add = async (fields) => {

    checkNotNull(fields)
    requireObjectKeys(fields, ["userId"])
    checkUserIdType(fields.userId);
    await checkUserExists(fields.userId);
    checkObjectKeysPartOfArr(fields,[ "userId", "interestedIn", "maxDistance", "ageMin", "ageMax", "agePrivate", "userLocation "])
    validateObjectFieldTypes(fields);


    let keys = Object.keys(fields);
    let sqlCommand = `INSERT into userSettings ( ${keys.map((key) => `${key}`).join(" , ")} ) values ( ${keys.map((key, index) => `$${index + 1}`).join(" , ")} )`;
    await db.query(sqlCommand, [...keys.map(key=> fields[key])])
}