const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('Hello to our hell');
    res.end()
});

server.listen(5000);