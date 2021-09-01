var db = require('../config/db');
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    console.log(req.body.data)
    let time = req.body.data.avg_minutes_game.split(":")
    let seconds = parseFloat(time[1]) / 60
    let minPlayed = parseFloat(time[0]) + seconds;

    let addPlayerSQL = `INSERT INTO player_stats (id, player_id, fantasy_points_per_game, points_per_game, rebounds, steals, blocks, 
            turnovers, avg_minutes_game, games_played, assists, field_goal_percentage, three_point_percentage, free_throw_percentage)
            VALUES("${req.body.data.player_id}", "${req.body.data.player_id}", "${req.body.data.fantasy_points_per_game}", "${req.body.data.points_per_game}", "${req.body.data.rebounds}", ${req.body.data.steals}, ${req.body.data.blocks}, 
            ${req.body.data.turnovers}, ${minPlayed}, ${req.body.data.games_played}, ${req.body.data.assists}, ${req.body.data.field_goal_percentage}, ${req.body.data.three_point_percentage}, ${req.body.data.free_throw_percentage})`;

    db.query(addPlayerSQL, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        } else {
            return res.status(200).send({
                success: 'true'
            });
        }
    });
});
module.exports = router;