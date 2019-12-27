const { Pool } = require('pg');

const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'mydb',
    password: '',
    post: 5432
})

module.exports = pool;
