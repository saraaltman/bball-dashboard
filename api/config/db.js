var mysql = require('mysql2');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'S@lt0909',
    database: 'bball'
});

db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

module.exports = db;

//TODO: add statements to create db and tables in this file