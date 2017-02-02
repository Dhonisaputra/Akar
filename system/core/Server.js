// load requirement
var express = require('express');
global.app 	= express();
var http 	= require('http').createServer(app);
global.io 	= require('socket.io')(http);

// connect server
http
.listen(process.env.PORT || global.PORT, function() {
    console.log('server node running...');
});