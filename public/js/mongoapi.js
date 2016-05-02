var db_name = process.env.OPENSHIFT_APP_NAME || "helpio";
var connection_string = '127.0.0.1:27017/' + db_name;
// if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}
var mongojs = require("mongojs");
var db = mongojs(connection_string, ["Events"]);
//var events = db.collection("Events");

exports.fetchIndexPage = function (req, res, next) {
    return {
        "_id": ObjectId("572648f63a46537d10000002"),
        "name": "mission",
        "statement1": "Our mission is to fund low-cost, high-impact healthcare. While we would like to eventually work in the United States, we currently focus our efforts in low income countries because it’s more frequently the case that a relatively small amount of money stands in the way of someone receiving life-changing care.",
        "statement2": "We take patient privacy very seriously. It’s important to us that every patient posted on iCare understands what iCare is and how it works. Our Medical Partners are responsible for ensuring that every patient understands Watsi and explicitly wishes to participate in the program."
    };


    //db.collection('core').find({"name": "jacky"}, function (err, result) {
    //    console.log("fetchIndexPage callback");
    //    if (err) {
    //        return next(err);
    //    }
    //    return res.render('mission',{
    //        statement1: result[0].statement1,
    //        statement2:result[0].statement2
    //    });
    //
    //});
}





