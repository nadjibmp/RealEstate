const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'ounmadhr',
    host: 'localhost',
    port: 5433,
    database:'dbtest'
})

module.exports = pool