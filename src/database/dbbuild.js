const fs = require('fs');
const path = require('path');
const dbConnection = require('./dbconnection.js');



let sqlPath = path.join(__dirname, 'sql');

let sql = fs.readdirSync(sqlPath)
    .filter(x=> /.*\.sql$/)
    .map(fileName=>path.join(__dirname,"sql", fileName))
    .map(path=> fs.readFileSync(path).toString())
    .join("\n")

const runDbBuild = async () => {

   await dbConnection.query(sql)
}

if(process.env.RESETDB === 'true'){
    runDbBuild().then()
}

module.exports = runDbBuild