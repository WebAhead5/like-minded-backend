const { Pool } = require('pg');
require('dotenv').config();
let DATABASE_URL = process.env.DATABASE_URL

if (process.env.NODE_ENV !== 'production') {
    DATABASE_URL = process.env.TEST_DB_URL
}
 
if (!process.env.DATABASE_URL) {
    throw new Error('DB_URL must be set')
}

module.exports = new Pool({
    connectionString: DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})