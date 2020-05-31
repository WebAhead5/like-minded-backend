
const db = require("../database/dbconnection")

exports.get = async (userId)=>{

   let result;

    try {
      result =  await db.query("select * from userprofile where userid = $1", [userId])
    } catch (e) {
        console.error(e)
        throw e;
    }

    if(result.rows.length === 0)
       throw new Error("user not found")

    return result.rows[0];
}

exports.update = async (userId, fields)=>{

    if(!fields)
        return ;
    let keys = Object.keys(fields)

    for(let key of keys)
        await db.query(`update userProfile set ${key} = $1 where userid = $2  `,[fields[key],userId])



}

exports.delete = async (userId)=>{
    await db.query(`delete from userProfile where userId = $1`, [userId])

}

exports.add = async ({userId,firstName, lastName, gender }) =>{
    await db.query(`insert into userprofile(userid, firstname, lastname, gender) values ($1,$2,$3,$4)`, [userId,firstName, lastName, gender])

}