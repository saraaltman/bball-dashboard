var db = require('./config/db')

function

let getTeamSQL = `SELECT * FROM players`;
connection.query(getTeamSQL, (error, results, fields) => {
    if (error) {
        return console.error(error.message);
    }
    console.log(results);
});

let addPlayerSQL = INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');