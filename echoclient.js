var io = require('socket.io-client');
var socket = io('http://127.0.0.1:3000');

socket.on('connect', function() {
	console.log('connected!!');
});

socket.on('message', function(data) {
	console.log('receive : ', data);
	//socket.send('echo : '+ data);
});

process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(chunk) {
	if( !socket.disconnected ){
		socket.send(chunk);
		console.log('send : ' + chunk);
	}
});