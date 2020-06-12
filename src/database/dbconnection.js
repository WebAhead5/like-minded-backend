const {inProduction} = require("../tools/envCheck");
const { Pool } = require('pg');
require('dotenv').config();


let DATABASE_URL = process.env.DATABASE_URL

if (!inProduction)
    DATABASE_URL = process.env.TEST_DB_URL

if (!DATABASE_URL)
    throw new Error('DATABASE_URL must be set')

module.exports = new Pool({
    connectionString: DATABASE_URL,
  ssl: false

})
