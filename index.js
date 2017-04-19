var StatusService = require('./statusService');
var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')
var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.json())


var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI;
MongoClient.connect(url, function(err, db) {
    console.log("Mongo database connected.");

    var statusService = new StatusService(db);

    app.get('/', function (req, res) {
        statusService.getMostRecent()
            .then((status) => {
                res.render('home', status);
            })
            .catch((err) => {
                res.status(500).send({error: err});
            });
    });

    app.post('/', (req, res) => {
        statusService.new(req.body)
            .then(()=>{
                res.status(200).end();
            })
            .catch((err) => {
                res.status(400).send({error: err});
            });
    });

    var port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log(`Example app listening on port ${port}!`);
    });
});