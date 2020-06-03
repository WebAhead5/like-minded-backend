const dbConnection = require("../database/dbconnection");

exports.validateCredentials = async ( email, password ) => {

    let res = await dbConnection.query("select * from auth where email = $2 ", [email])

    if (res.rowCount !== 1)
        return {
            isValid: false,
            isvalid: false,
            message: "user not found"
        }
    res = await dbConnection.query("select * from auth where password = $1 and email = $2 ", [password, email])

    if (res.rowCount !== 1)
        return {
            isValid: false,
            isvalid: false,
            message: "incorrect password"
        }

    return {
        userId : res.rows[0].id,
        userid : res.rows[0].id,
        isValid: true,
        isvalid: true,
        userId: res.rows[0].userid,
        userid: res.rows[0].userid,
    }

}