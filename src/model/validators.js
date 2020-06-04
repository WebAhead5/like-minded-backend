const dbConnection = require("../database/dbconnection")

exports.checkUserIdType=(userId) =>{

    if(isNaN(userId))
        throw new Error("user ID must be an integer (a number)")

}
exports.checkNotNull=(obj) =>{

   if(obj === undefined || Object.keys(obj).length === 0 )
       throw new Error("null object provided/no fields provided")

}
exports.checkUserExists=(userId) =>{

    (async function () {
        let res = await dbConnection.query("select * from auth where id = $1 ", [userId])
        if (res.rowCount !== 1)
            throw new Error("no user exists with userId " + userId)
    })();

}
exports.checkEmailStructure=(email)=> {
    if(!/^([a-zA-Z0-9]+[_.\-]?)+@([a-zA-Z0-9_\-]*\.?[a-zA-Z0-9_\-]{1,})+$/.test(email))
        throw new Error("invalid email structure was provided");

}

exports.checkObjectKeysPartOfArr=(object, keysArr = [])=> {

    let keys = Object.keys(object).map(x=>x.toLowerCase())
    keysArr = keysArr.map(x=>x.toLowerCase())

    if (keys.some(key => !keysArr.includes(key)))
        throw Error("invalid field provided - can only include one of the following fields : " + keysArr.toString())


}
exports.requireObjectKeys=(object, keysArr = [])=> {

    let keys = Object.keys(object).map(x=>x.toLowerCase())
    keysArr = keysArr.map(x=>x.toLowerCase())

    if (keysArr.some(key => !keys.includes(key)))
        throw Error("invalid field provided - missing the following fields: "
            + keysArr.filter(key=>!keys.includes(key)));



}

exports.validateUserSettingsFieldTypes=(obj)=>{

    (async function () {
        let objectKeys = Object.keys(obj);

        for (let key of objectKeys) {
            let lowerCase = key.toLowerCase();

            if (lowerCase === "userid")
                exports.checkUserIdType(obj[key]);

            else if (lowerCase === "interestedin") {
                let availableTypes = await dbConnection.query("SELECT unnest(enum_range(NULL::interestedIn))::varchar")
               availableTypes = availableTypes.rows.map(x=>x.toLowerCase());
                if(!availableTypes.includes(obj[key]))
                    throw new Error(`invalid field value - "${key}" must be one of the following values: "${availableTypes.join(", ")}" ` )
            }
            else if ((lowerCase === "maxdistance" || lowerCase === "maxage" || lowerCase === "minage") && isNaN(obj[objectKeys]))
                throw new Error(`invalid field value - "${key}" must be a number `);

            else if (lowerCase === "ageprivate")
                throw new Error(`invalid field value - "${key}" must be a boolean `);

            else if (lowerCase === "userlocation" && typeof obj[key] !== "string")
                throw new Error(`invalid field value - "${key}" must be a string `);

        }
    })()
}

