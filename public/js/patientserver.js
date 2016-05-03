var port = 1337;
var express = require('express');
var app = express();
var path = require("path");
var cons = require('consolidate');
var bodyParser = require('body-parser');
var fs = require('fs');


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/patient.html'));
});


app.post('/patient', function(req, res) {
    var content = fs.readFileSync(path.join(__dirname + '/patients.json'));
    res.setHeader('Content-Type', 'application/json');
    res.send(content);
})


app.listen(port);