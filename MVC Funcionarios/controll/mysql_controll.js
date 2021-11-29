const mysql = require('mysql')
const con = mysql.createConnection({
    'user':'root',
    'database':'empresa',
    'host':'localhost'
})

module.exports = {
    con
}