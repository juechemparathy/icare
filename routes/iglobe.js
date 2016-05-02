var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('iglobe');
});

//   /* GET Hello World page. */
//   router.get('/helloworld', function(req, res) {
//       res.render('helloworld', { title: 'Hello, World!' })
//   });
//
/* GET Userlist page. */
router.get('/test', function(req, res) {
    var db = req.db;
    //collection.find({},{},function(e,docs){
    db.collection('core').find({"name": "mission"}, function (err, event) {

        if (err) {
            res.render('error');
        } else {
            res.render('index', {
                title: event[0].name,
                statement1: event[0].statement1,
                statement2: event[0].statement2
            });
        }
    });
});

module.exports = router;