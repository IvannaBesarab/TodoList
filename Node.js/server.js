var http = require('http');
var fs   = require('fs');

var port = 8007;

function onRequest(req, res) {
    fs.readFile(req.url.substr(1), function (err, data){
        res.end(data);
    });
}

http.createServer(onRequest).listen(port);
console.log('Server is working on localhost: ' + port);
