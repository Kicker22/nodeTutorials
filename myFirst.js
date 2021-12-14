const http = require('http');
const dt = require('./myModules')

http.createServer(function(req,res){
    res.writeHead(200,{'contentType': 'text/html'});
    res.write('Hello, the current date and time is: ' + dt.myDatetime());
}).listen(8080);

