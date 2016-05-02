var db_name = process.env.OPENSHIFT_APP_NAME || "helpio";
var connection_string = '127.0.0.1:27017/' + db_name;

process.env.OPENSHIFT_MONGODB_DB_USERNAME = "admin";
process.env.OPENSHIFT_MONGODB_DB_PASSWORD = "vgrzFZ7YbdkX";
process.env.OPENSHIFT_MONGODB_DB_HOST = "127.0.0.1";
process.env.OPENSHIFT_MONGODB_DB_PORT = "27017";
process.env.OPENSHIFT_APP_NAME = "helpio";

// if OPENSHIFT env variables are present, use the available connection info:
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
} else {
    connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}
var mongojs = require("mongojs");
var db = mongojs(connection_string, ["helpio"]);
//var events = db.collection("Events");

exports.fetchIndexPage = function (req, res, next) {
    console.log("ceating Index page");
    db.collection('core').find({"name": "mission"}, function (err, event) {
        if (err) {
            return next(err);
        }
        return res.render('pages/index',{
            title: event[0].name,
            statement1:event[0].statement1,
            statement2:event[0].statement2
        });

    });
}





