const dbConnection = require("../database/dbconnection")

exports.checkUserIdType = (userId) => {

    if (isNaN(userId))
        throw new Error("user ID must be an integer (a number)")
}

exports.checkNotNull = (obj) => {

    if (obj === undefined || Object.keys(obj).length === 0)
        throw new Error("null object provided/no fields provided")
}

exports.checkUserExists = async (userId) => {
    let res = await dbConnection.query("select * from auth where id = $1 ", [userId])
    if (res.rowCount !== 1)
        throw new Error("no user exists with userId " + userId)
}

exports.checkEmailStructure = (email) => {
    if (!/^([a-zA-Z0-9]+[_.\-]?)+@([a-zA-Z0-9_\-]*\.?[a-zA-Z0-9_\-]{1,})+$/.test(email))
        throw new Error("invalid email structure was provided");
}

exports.checkObjectKeysPartOfArr = (object, keysArr = []) => {

    let keys = Object.keys(object).map(x => x.toLowerCase())
    keysArr = keysArr.map(x => x.toLowerCase())

    if (keys.some(key => !keysArr.includes(key)))
        throw Error("invalid field provided - can only include one of the following fields : " + keysArr.toString())


}
exports.requireObjectKeys = (object, keysArr = []) => {

    let keys = Object.keys(object).map(x => x.toLowerCase())
    keysArr = keysArr.map(x => x.toLowerCase())

    if (keysArr.some(key => !keys.includes(key)))
        throw Error("invalid field provided - missing the following fields: "
            + keysArr.filter(key => !keys.includes(key)));



}
exports.noDuplicateObjectKeys = (obj) => {

    let keys = Object.keys(obj)
    if (new Set(keys).size !== keys.length)
        throw new Error("invalid field provided - duplicate key was detected")

}

exports.validateObjectFieldTypes = async (obj) => {

    let objectKeys = Object.keys(obj);

    for (let key of objectKeys) {
        let lowerCase = key.toLowerCase();
        let availableTypes;

        switch (lowerCase) {

            case "interestedin":
                if (!obj[key])
                    throw new Error(`invalid field value - "${key}" cannot be null`)
                availableTypes = await dbConnection.query("SELECT unnest(enum_range(NULL::interestedIn))::varchar as coltype")
                availableTypes = availableTypes.rows.map(x => x.coltype.toLowerCase());
                if (!availableTypes.includes(obj[key]))
                    throw new Error(`invalid field value - "${key}" must be one of the following values: "${availableTypes.join(", ")}" `)
                break;


            case "gender":
                if (!obj[key])
                    throw new Error(`invalid field value - "${key}" cannot be null`)
                availableTypes = await dbConnection.query("SELECT unnest(enum_range(NULL::genderType))::varchar as coltype")
                availableTypes = availableTypes.rows.map(x => x.coltype.toLowerCase());
                if (!availableTypes.includes(obj[key]))
                    throw new Error(`invalid field value - "${key}" must be one of the following values: "${availableTypes.join(", ")}" `)
                break;

            case "relationshipstatus":
                if (!obj[key])
                    throw new Error(`invalid field value - "${key}" cannot be null`)
                availableTypes = await dbConnection.query("SELECT unnest(enum_range(NULL::relationshipType))::varchar as coltype")
                availableTypes = availableTypes.rows.map(x => x.coltype.toLowerCase());
                if (!availableTypes.includes(obj[key]))
                    throw new Error(`invalid field value - "${key}" must be one of the following values: "${availableTypes.join(", ")}" `)
                break;

            case "userid":
                await exports.checkUserExists(obj[key])
                break;


            case "maxdistance":
            case "maxage":
            case "minage":
                if (Number.isNaN(obj[objectKeys]))
                    throw new Error(`invalid field value - "${key}" must be a number `);
                break;


            case "ageprivate":
                if (typeof obj[key] !== "boolean")
                    throw new Error(`invalid field value - "${key}" must be a boolean `);
                break;


            case "userlocation":
            case "firstname":
            case "lastname":
            case "status":
            case "bio":
            case "job":
            case "primaryphoto":
            case "livingin":
                if (typeof obj[key] !== "string")
                    throw new Error(`invalid field value - "${key}" must be a string `);
                break;


            case "subphotos":
                if (!Array.isArray(obj[key]) || obj[key].some(val => typeof val !== "string"))
                    throw new Error(`invalid field value - "${key}" must be an array of strings`);
                break;
        }
    }
}

exports.isQuizType = (quizType) => {
    arrayOfQuizTypes = ['MBTI-short']
    if (!arrayOfQuizTypes.includes(quizType))
        throw new Error("This quiz type doesn't match with our current ones: " + quizType)
}