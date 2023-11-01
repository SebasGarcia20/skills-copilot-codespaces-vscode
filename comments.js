// create a web server that responds to requests to /comments with a JSON file
// containing a list of comments
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/comments') {
    // read the comments.json file and send it back to the client
    fs.readFile('./comments.json', function(err, data) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(data);
    });
  }
}).listen(8000, function() {
  console.log('Listening on port 8000');
});