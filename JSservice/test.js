const http = require('http');
http.createServer((request,response) => {
    console.log('11');
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end(); return 'ok';
}).listen(7894)