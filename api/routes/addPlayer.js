var db = require('../config/db');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
        let addPlayerSQL = `INSERT INTO players (id, firstName, lastName, position, team_id, height_feet, height_inches, weight_pounds)
            VALUES("${req.body.data.id}", "${req.body.data.firstName}", "${req.body.data.lastName}", "${req.body.data.position}", ${req.body.data.team_id}, ${req.body.data.height_feet}, ${req.body.data.height_inches}, ${req.body.data.weight_pounds})`;
        db.query(addPlayerSQL, (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            return res.status(200).send({
                success: 'true'
              });
        });
    });
module.exports = router;












