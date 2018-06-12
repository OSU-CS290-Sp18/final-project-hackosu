
var MongoClient = require('mongodb').MongoClient;

var mongoHost = 'classmongo.engr.oregonstate.edu';
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = 'cs290_hazratie';
var mongoPassword = 'cs290_hazratie';
var mongoDBName = 'cs290_hazratie';

var mongoURL = "mongodb://" +
    mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + 
    mongoPort + "/" + mongoDBName;
    
var mongoDB = null;

var app = express();
var port = process.env.PORT || 3000;