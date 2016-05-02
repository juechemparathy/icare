// load the things we need
var express = require('express');
var fs      = require('fs');
var app = express();
var api=require('./public/js/mongoapi');


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use(express.static(__dirname + '/public'));

// index page
app.get('/', function(req, res) {
    res.render('pages/index', api.fetchIndexPage());
});

app.get('/patients', function(req, res) {
    res.render('pages/patients');
});

app.get('/patientDetail', function(req, res) {
    res.render('pages/patientDetail');
});

app.get('/iglobe', function(req, res) {
    res.render('pages/iglobe');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(port, ipaddress, function() {
    console.log('%s: Node server started on %s:%d ...',
        Date(Date.now() ), ipaddress, port);
});

console.log('8080 is the magic port');