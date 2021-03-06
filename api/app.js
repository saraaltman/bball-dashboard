var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var getTeamAPIRouter = require("./routes/getTeam");
var addPlayerAPIRouter = require("./routes/addPlayer");
var addPlayerStatsAPIRouter = require("./routes/addPlayerStats");
var getPlayerStatsAPIRouter = require("./routes/getPlayerStats");
var getTeamStatsAPIRouter = require("./routes/getTeamStats");
var getPlayerAPIRouter = require("./routes/getPlayer");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({credentials: true, origin: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/player", addPlayerAPIRouter);
app.use("/player", getPlayerAPIRouter);
app.use("/team", getTeamAPIRouter);
app.use("/player/stats", addPlayerStatsAPIRouter);
app.use("/player/stats", getPlayerStatsAPIRouter);
app.use("/team/stats", getTeamStatsAPIRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
