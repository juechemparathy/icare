// load the things we need
var express = require('express');
var fs      = require('fs');

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port      = process.env.OPENSHIFT_NODEJS_PORT || 5000;
var app = express();

var db_name = process.env.OPENSHIFT_APP_NAME || "helpio";
var connection_string = '127.0.0.1:27017/' + db_name;

// if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
} else {

    process.env.OPENSHIFT_MONGODB_DB_USERNAME = "admin";
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD = "vgrzFZ7YbdkX";
    process.env.OPENSHIFT_MONGODB_DB_HOST = "127.0.0.1";
    process.env.OPENSHIFT_MONGODB_DB_PORT = "27017";
    process.env.OPENSHIFT_APP_NAME = "helpio";

    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

// use res.render to load up an ejs view file
console.log("Connection string:" +connection_string)
var mongojs = require("mongojs");
var db = mongojs(connection_string, ["helpio"]);

// set the view engine to ejs
app.set('view engine', 'ejs');

var routes = require('./routes/index');
var patients = require('./routes/patients');
var iglobe = require('./routes/iglobe');
var patientDetail = require('./routes/patientDetail');
var login = require('./routes/login');
var signup = require('./routes/signup');
var stats = require('./routes/stats');


// use res.render to load up an ejs view file
app.use(express.static(__dirname + '/public'));


// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/patients', patients);
app.use('/iglobe', iglobe);
app.use('/stats', stats);
app.use('/patientDetail', patientDetail);
app.use('/login', login);
app.use('/signup', signup);

// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(port, ipaddress, function() {
    console.log('%s: Node server started on %s:%d ...',
        Date(Date.now() ), ipaddress, port);
});

console.log('5000 is the magic port');