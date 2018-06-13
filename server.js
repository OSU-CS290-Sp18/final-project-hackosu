
var path = require('path');
var bp = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

var MongoClient = require('mongodb').MongoClient;

var mongoHost = process.env.MONGO_HOST || classmongo.engr.oregonstate.edu;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUsername = process.env.USER || cs290_hazratie;
var mongoPassword = process.env.MONGO_PASSWORD || cs290_hazratie;
var mongoDBName = process.env.MONGO_DB_NAME || cs290_hazratie;

var mongoURL = 'mongodb://' + mongoUsername + ':' + mongoPassword + 
               '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;

var mongoDB = null;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bp.json());
app.use(express.static("public"));

//Index Page Displayed
app.get('/', function(req, res){
    
    let participantDB = db.collection('participantsData');

    participantDB.find({}).toArray(function(err, participants){
        if(err)
            res.status(500).render('500');

        else
        {
            res.status(200).render('index');
        }
    });
});

app.get('/admin', function(req, res){
    res.status(200).render('admin', {
        
    });
});

//404 Page Displayed
app.get('*', function(req,res){
	res.status(404).render("404");
});



//Connect Mongo Client
MongoClient.connect(mongoURL, function(err, client){
	if(err)
        throw err;
        
	db = mongoDB = client.db(mongoDBName);
	app.listen(port, function(){
		console.log("Server is listening on port == ", port);
	});
});
