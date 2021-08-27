const mysql = require('mysql');

const mysqlconnection = mysql.createConnection({
    host: 'localhost',
    database: 'kodeardb',
    user: 'root',
    password: '123123',
    port: 3306
});

mysqlconnection.connect(function(err) {
    if (err) {
        throw error;
    } else {
        console.log('conexion exitosa con MySQL!!');
    }
});

module.exports = mysqlconnection;