const http = require('http');
var dt = require('./myfirstmodule');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();
}).listen(port);