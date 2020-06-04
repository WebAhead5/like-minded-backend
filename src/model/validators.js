
module.exports.checkUserIdType = (userId) => {
    if(isNaN(userId))
        throw new Error("invalid userId provided")
}
module.exports.checkUserExists=(userId) =>{

    (async function () {
        let res = await dbConnection.query("select * from auth where id = $1 ", [userId])
        if (res.rowCount !== 1)
            throw new Error("no user exists with userId " + userId)
    })();

}
module.exports.checkEmailStructure=(email)=> {
    if(!/^([a-zA-Z0-9]+[_.\-]?)+@([a-zA-Z0-9_\-]*\.?[a-zA-Z0-9_\-]{1,})+$/.test(email))
        throw new Error("invalid email structure was provided");

}

module.exports.checkObjectKeysPartOfArr=(object, keysArr = [])=> {

    let keys = Object.keys(object).map(x=>x.toLowerCase())
    keysArr = keysArr.map(x=>x.toLowerCase())

    if (keys.some(key => !keysArr.includes(key)))
        throw Error("invalid field provided")


}

module.exports.requireObjectKeys=(object, keysArr = [])=> {

    let keys = Object.keys(object).map(x=>x.toLowerCase())
    keysArr = keysArr.map(x=>x.toLowerCase())

    if (keysArr.every(key => !keys.includes(key)))
        throw Error("invalid field provided")


}

