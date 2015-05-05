var request = require("request");

doRequest();

function doRequest() {
	
	var startTime, diffTime;
	
	//Start the timer.
	startTime = new Date();
	
	request("http://www.google.com", function(err,res,body){
		diffTime = ( new Date() - startTime );
		console.log("It took " + diffTime + " milliseconds to get a response.");
	});
	
};
