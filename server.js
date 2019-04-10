const http = require("http");

const PORT = 3000;

function handleRequest(request, response){
    response.end("Cool it works! Path hit here:" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("server up! on http://localhost:" + PORT);
})