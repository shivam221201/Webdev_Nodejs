var http = require('http');
var fs = require('fs');

 var server = http.createServer(function(req , res){
     console.log('request was made:', +req.url);
     if(req.url === '/home' || req.url === '/'){
         res.writeHead(200, {'content-type': 'text/html'});
         fs.createReadStream(__dirname + '/index.html').pipe(res);
     }
     else if(req.url === '/contact'){
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
     }
 });

 server.listen(3002, '127.0.0.1');
 console.log('port 3002');
