const fs = require('fs');
const path = require('path');
const dbConnection = require('./dbconnection.js');

const sqlPath = path.join(__dirname, 'dbbuild.sql');
const sql = fs.readFileSync(sqlPath).toString();

const runDbBuild = async () => await dbConnection.query(sql)

if(process.env.RESETDB === 'true'){
    runDbBuild()
}

module.exports = runDbBuild