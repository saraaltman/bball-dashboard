var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send([{firstName: "Steph", lastName: "Curry", position: "PG", team: "GSW"}, {firstName: "Lebron", lastName: "James", position: "PG", team: "LAL"}, {firstName: "Trae", lastName: "Young", position: "PG", team: "ATL"}]);
});

module.exports = router;