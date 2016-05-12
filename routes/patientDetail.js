var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res) {
    res.render('patientDetail');
});

/* GET Userlist page. */
router.get('/', function(req, res) {
    var db = req.db;
    var name = req.query.name
    //collection.find({},{},function(e,docs){
    db.collection('patients').find({"name": name }, function (err, event) {
        if (err) {
            res.render('error');
        } else {
            res.render('patientDetail', {
                p_desc: event[0].desc,
                p_fund_needed: event[0].fund_needed,
                p_fund_raised: event[0].fund_raised,
                p_heading: event[0].heading,
                p_image_url: event[0].image_url,
                p_name: event[0].name
            });
        }
    });
});

module.exports = router;