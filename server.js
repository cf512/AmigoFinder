// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// function handleRequest(request, response){
//     response.end("Cool it works! Path hit here:" + request.url);
// }

// var server = http.createServer(handleRequest);

app.listen(PORT, function(){
    console.log("server up! on http://localhost:" + PORT);
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });