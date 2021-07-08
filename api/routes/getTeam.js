var db = require('../config/db');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
        let getTeamSQL = `SELECT * FROM players`;
        db.query(getTeamSQL, (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            console.log(results);
            return res.status(200).send({
                success: 'true',
                team: results,
              });
        });
});
module.exports = router;

