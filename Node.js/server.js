var http       = require('http');
var fs         = require('fs');
var express    = require('express');
var bodyParser = require('body-parser');
var app        =  express();

app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
    fs.readFile('index.html', function (err, data){
        res.end(data);
   });
})

app.post('/input', function (req, res, b) {
   console.log(req.body);
   if (!req.body.inputText){
       res.json({valid: false});
       return;
   }
   res.json({valid: true});
});

app.listen(3030);
console.log('Server is working on localhost: ' + 3000);
