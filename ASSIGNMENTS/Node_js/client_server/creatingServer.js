var http = require('http');

 var server = http.createServer(function(req , res){
     console.log('request was made:', +req.url);
     res.writeHead(200, {'Content-type': 'tex/plain'});
     res.end('hey shivam')
 });

 server.listen(3000, '127.0.0.1');
 console.log('port 3000');