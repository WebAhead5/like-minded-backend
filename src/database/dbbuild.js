const fs = require('fs');
const path = require('path');

const dbConnection = require('./dbconnection.js');

const sqlPath = path.join(__dirname, 'dbbuild.sql');
const sql = fs.readFileSync(sqlPath).toString();

const runDbBuild = cb => dbConnection.query(sql,cb)

if(process.env.RESETDB === 'true'){
    runDbBuild((err,res)=> {
        if(err) process.exit(1)
         process.exit(0)
    })
}

module.exports = runDbBuild