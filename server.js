const port = process.env.PORT || 3000;
var http = require('http');
var fs= require('fs');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, '0.0.0.0');

process.on ('SIGTERM', function() {
  fs.writeFile('/home/site/wwwroot/helloworld.txt', 'Hello World!', function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
}); 
