var statusService = require('./statusService');
var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser')
var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.json())

app.get('/', function (req, res) {
    statusService.getMostRecent()
        .then((status) => {
            res.render('home', status);
        });
});

app.post('/', (req, res) => {
    statusService.new(req.body);
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});