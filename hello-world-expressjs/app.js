//Declare our server variable.
var server;

//Include the express frame, and set app as express.
var express = require("express");
var app			= express();

//Create a callback that returns Hello world for all GET requests.
app.get("/*", function(req, res){
	console.log("Request received!");
	res.end("Hello, world!");
});

//Create a server, and set it to listen on port 8080.
server = app.listen(8080, function(){
	
	console.log("Hello world server listening at http://%s:%s", server.address().address, server.address().port);
	
});