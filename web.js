var fs = require('fs');
var express = require('express');
var buffer = new Buffer();
var app = express.createServer(express.logger());
var file = fs.readFileSync(index.html);
app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8',0,file));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
