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
                   patient1_fund_raised: event[0].patient1.fund_raised,
                   patient1_image_url: event[0].patient1.image_url,

                   patient2_name: event[0].patient2.name,
                   patient2_heading: event[0].patient2.heading,
                   patient2_desc: event[0].patient2.desc,
                   patient2_fund_needed: event[0].patient2.fund_needed,
                   patient2_fund_raised: event[0].patient2.fund_raised,
                   patient2_image_url: event[0].patient2.image_url,

                   patient3_name: event[0].patient3.name,
                   patient3_heading: event[0].patient3.heading,
                   patient3_desc: event[0].patient3.desc,
                   patient3_fund_needed: event[0].patient3.fund_needed,
                   patient3_fund_raised: event[0].patient3.fund_raised,
                   patient3_image_url: event[0].patient3.image_url,

                   patient4_name: event[0].patient4.name,
                   patient4_heading: event[0].patient4.heading,
                   patient4_desc: event[0].patient4.desc,
                   patient4_fund_needed: event[0].patient4.fund_needed,
                   patient4_fund_raised: event[0].patient4.fund_raised,
                   patient4_image_url: event[0].patient4.image_url,

                   patient5_name: event[0].patient5.name,
                   patient5_heading: event[0].patient5.heading,
                   patient5_desc: event[0].patient5.desc,
                   patient5_fund_needed: event[0].patient5.fund_needed,
                   patient5_fund_raised: event[0].patient5.fund_raised,
                   patient5_image_url: event[0].patient5.image_url,

                   patient6_name: event[0].patient6.name,
                   patient6_heading: event[0].patient6.heading,
                   patient6_desc: event[0].patient6.desc,
                   patient6_fund_needed: event[0].patient6.fund_needed,
                   patient6_fund_raised: event[0].patient6.fund_raised,
                   patient6_image_url: event[0].patient6.image_url,
                   patient7_name: event[0].patient7.name,
                   patient7_heading: event[0].patient7.heading,
                   patient7_desc: event[0].patient7.desc,
                   patient7_fund_needed: event[0].patient7.fund_needed,
                   patient7_fund_raised: event[0].patient7.fund_raised,
                   patient7_image_url: event[0].patient7.image_url,

                   patient8_name: event[0].patient8.name,
                   patient8_heading: event[0].patient8.heading,
                   patient8_desc: event[0].patient8.desc,
                   patient8_fund_needed: event[0].patient8.fund_needed,
                   patient8_fund_raised: event[0].patient8.fund_raised,
                   patient8_image_url: event[0].patient8.image_url

               });
           }
       });
   });

module.exports = router;