var express = require('express');
var fs = require('fs');
<<<<<<< HEAD
=======

>>>>>>> 7cb75074a300599053eaf7d24b874156ad464d2e
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
response.send(fs.readFileSync('index.html','').toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
