console.log(`Example 1 : Request Response`);
var htttp = require('http');
var server = htttp.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`This is test`);
})
server.listen(2000);

console.log(`Example 2 : Error exited max redirect`);
console.log(`with maxRedirects: 0, redirects are always followed.`);

const express = require('express');
const app = express();
app.get('/get', (req, res) => {
    console.log(`res`);
})
app.get('api/ab(cd)?e', (req, res) => {
    console.log(req.body, "==", req.params);
})
app.listen((2001), () => {
    console.log(`Express app islisting on PORT : 2001`);
})
