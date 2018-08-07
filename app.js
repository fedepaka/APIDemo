var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var tasksRouter = require('./routes/tasks');

var app = express();

// CORS HEADER configuration
// https://stackoverflow.com/questions/23751914/how-can-i-set-response-header-on-express-js-assets
app.use(function (req, res, next) {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, x-auth");
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// mdiddleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api/v1/usuarios', usuariosRouter);
app.use('/api/v1/tasks', tasksRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.use((err, req, res, next) => {
    if (err.isServer) {
        // log the error...
        // probably you don't want to log unauthorized access
        // or do you?
    }
    console.log(err);
    return res.status(err.output.statusCode || 500).json(err.output.payload);
})

// var server = http.createServer(app);
// server.listen(4003);
module.exports = app;
