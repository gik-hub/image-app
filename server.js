var http = require('http');
var app = require('./app');

const port = 4000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server is running on port ${4000}`);
});