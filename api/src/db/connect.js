const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit:10,
    host:'10.89.240.65',
    user:'alunods',
    password:'senai@604',
    database:'vio_arthur'
})

module.exports = pool;