const db = require("../database/dbconnection")
const {noDuplicateObjectKeys} = require("../tools/modelsInputValidators");
const {checkNotNull, validateObjectFieldTypes ,checkObjectKeysPartOfArr, requireObjectKeys ,checkUserExists, checkUserIdType} = require("../tools/modelsInputValidators")
// Get user profile data from userId
exports.get = async (userId) => {


    checkUserIdType(userId);
    await checkUserExists(userId);


    let result = await db.query("select * from userprofile where userId = $1", [userId])


    result.rows[0].id = undefined;

    return result.rows[0];
}

// Set user profile data with userId and updated fields.
exports.update = async (userId, fields) => {

    checkUserIdType(userId);
    await checkUserExists(userId);
    checkNotNull(fields);
    checkObjectKeysPartOfArr(fields, ["firstname", "lastname", "gender", "status", "bio", "job", "livingin", "primaryphoto","subphotos"])
    noDuplicateObjectKeys(fields)
    await validateObjectFieldTypes(fields);


    let keys = Object.keys(fields);
    let sqlCommand = `update userProfile set ${keys.map((key, index) => `${key} = $${index + 2}`).join(" , ")} where userid = $1  `;
    // update userProfile set firstname = $2, lastname = $3 where userid = $1

    await db.query(sqlCommand, [userId, ...keys.map(key=>fields[key])])

}

// Delete user profile with userId
exports.delete = async (userId) => {

    checkUserIdType(userId);
    await checkUserExists(userId);

    await db.query(`delete from userProfile where userId = $1`, [userId])
}

// Add user with userId and form information.
// exports.add = async ({userId,firstname, lastname, gender, status, bio, job, livingin, primaryphoto}) => {
exports.add = async (fields) => {

    checkNotNull(fields)
    requireObjectKeys(fields, ["userId","firstname", "lastname", "gender"])
    checkUserIdType(fields.userId);
    await checkUserExists(fields.userId);
    checkObjectKeysPartOfArr(fields,["userId","firstname", "lastname", "gender", "status", "bio", "job", "livingin", "primaryphoto","subphotos"])
    noDuplicateObjectKeys(fields)
    await validateObjectFieldTypes(fields);

    let keys = Object.keys(fields);
    let sqlCommand = `INSERT into userProfile ( ${keys.map((key) => `${key}`).join(" , ")} ) values ( ${keys.map((key, index) => `$${index + 1}`).join(" , ")} )`;
    await db.query(sqlCommand, [...keys.map(key=> fields[key])])

}
