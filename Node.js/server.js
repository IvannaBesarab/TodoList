var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json

app.get('/', function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.end(data);
    });
});

app.post('/input', function (req, res) {
    if (!req.body.inputText) {
        res.status(500);
        res.end();
        return;
    }
    res.status(200);
    res.end();
});

app.listen(3030);
console.log('Server is working on localhost: ' + 3030);
