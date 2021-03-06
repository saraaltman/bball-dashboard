var db = require('../config/db');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let getStatsSQL = `SELECT * FROM player_stats WHERE id = ${req.params.id}`;
  db.query(getStatsSQL, (error, results, fields) => {
      if (error) {
          return console.error(error.message);
      }
      return res.status(200).send({
          success: 'true',
          stats: results,
        });
  });
});

module.exports = router;
