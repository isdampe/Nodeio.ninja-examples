setInterval(function(){
	console.log("Proc!");
}, 1000);

//Ctrl + C to trigger SIGINT
process.on('SIGINT', function () {
  console.log('You interrupted me with Ctrl + C!');
	process.exit(0);
});

//Kill / end a process to trigger SIGTERM
//sudo pkill node
process.on('SIGTERM', function() {
	console.log('I received a SIGTERM from the OS!');
	process.exit(0);
});