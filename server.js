
require('dotenv').config();

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

var mongoHost = process.env.MONGO_HOST || "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME || "cs290_hazratie";
var mongoPassword = process.env.MONGO_PASSWORD || "cs290_hazratie";
var mongoDBName = process.env.MONGO_DB_NAME || "cs290_hazratie";

var mongoURL = "mongodb://" +
                mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + 
                mongoPort + "/" + mongoDBName;

var mongoDB = null;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//admin page redirected
app.get('/admin', function(req, res, next) {
    let participantServerData = mongoDB.collection('participantsData');

    participantServerData.find().toArray(function(err, participantsData) {
        if(err)
            res.status(500).render('500');

        else
            res.status(200).render('admin', { participants : participantsData });
    });

    //res.status(200).render('admin');
});

app.get('/regForm', function(req, res, next) {
    let participantDB = mongoDB.collection('participantsData');

    participantDB.find().toArray(function(err, participants){
        if(err)
            res.status(500).render('500');

        else
            res.status(200).render('regForm', { participants : participants });
    });

    //res.status(200).render('regForm');
});

app.get('/', function(req, res){
    res.status(200).render('index');
});

app.post('/addParticipant', function(req, res, next) {
    if(!req.body)
        res.status(400).render('400');
    
    else
    {
        let participant = {

            first: req.body.first,
            last: req.body.last,
            city: req.body.city,
            school: req.body.school,
            major: req.body.major,
            email: req.body.email,
            phone: req.body.phone,
            bday: req.body.bday,
            gender: req.body.gender,
            ethnicity: req.body.ethnicity

        };

        let newParticipantDB = mongoDB.collection('participantsData');
        newParticipantDB.insertOne(participant, function(err, participant) {

            if(err)
                res.status(500).render('500');

            else
                console.log("-- Added new participant to mongo server");
        }); 
    }
});

app.get('*', function(req, res) {
	res.status(404).render('404');
});

MongoClient.connect(mongoURL, function(err, client) {
    if(err)
		throw err;


    mongoDB = client.db(process.env.mongoDBname);

	app.listen(port, function() {
		console.log("-- Server is listening on port == ", port);
	});
});
/*
app.listen(port, function(){
    console.log("-- Server is listening on port == ", port);
});
*/