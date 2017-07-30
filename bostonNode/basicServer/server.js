var fs = require('fs');
var http = require('http');

function send404Response(response) {
    response.writeHead(404, {"Content-Type" : "text/plain"});
    response.write("Error 404: Page not found!");
    response.end();
}

function onRequest(request, response) {

    //if the method is get and the request url is homepage
    if ( request.method == 'GET' && request.url == '/') {
        //ask for an html file, read it and send it back as response
        response.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server is running... ");
