const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'nadjib23+',
    host: 'localhost',
    port: 5432,
    database:'dbTest'
})

module.exports = pool