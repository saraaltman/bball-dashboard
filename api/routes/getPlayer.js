var db = require('../config/db');
var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
        let getPlayerSQL = `SELECT * FROM players where id = ${req.params.id}`;
        db.query(getPlayerSQL, (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }
            return res.status(200).send({
                success: 'true',
                player: results,
              });
        });
});
module.exports = router;