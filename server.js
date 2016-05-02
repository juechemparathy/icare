// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use(express.static(__dirname + '/public'));

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
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

app.listen(8080);
console.log('8080 is the magic port');