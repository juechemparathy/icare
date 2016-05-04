var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res) {
    res.render('index', {
        title: 'YYYYYY',
        statement1: 'statement1',
        statement2: 'statement2',
    });
});

//   /* GET Hello World page. */
//   router.get('/helloworld', function(req, res) {
//       res.render('helloworld', { title: 'Hello, World!' })
//   });
//
   /* GET Userlist page. */
   router.get('/', function(req, res) {
       var db = req.db;
       //collection.find({},{},function(e,docs){
       db.collection('core').find({"name": "data"}, function (err, event) {

           if (err) {
               res.render('error');
           } else {
               res.render('index', {
                   title: event[0].name,
                   statement1: event[0].statement1,
                   statement2: event[0].statement2,
                   amt_raised: event[0].amt_raised,
                   project_count: event[0].project_count,
                   donation_count: event[0].donation_count,
                   patient1_name: event[0].patient1.name,
                   patient1_heading: event[0].patient1.heading,
                   patient1_desc: event[0].patient1.desc,
                   patient1_fund_needed: event[0].patient1.fund_needed,
                   patient1_fund_raised: event[0].patient1.fund_raised
               });
           }
       });
   });

module.exports = router;