var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8000;

app.use(express.static('public'));

http.listen(port, function(){
  console.log('listening on ' + port);
});

io.on('connection', function(socket){
		
	console.log('A user connected!');

	socket.on('chat', function(data){
	    console.log('CHAT: name: '+ data.name + ', message: ' + data.message);
	    io.emit('chat', data);
	});

	socket.on('disconnect', function(msg){	    
	    console.log('A user disconnected.');	    
	});

});