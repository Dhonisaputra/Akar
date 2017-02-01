var SERVER = 'server/';
var CLIENT = 'client/';

require('./'+SERVER+'system/core')
var config 	= require("./"+SERVER+"application/config/config")
	, req 	= require('./'+SERVER+'application/config/required')
	, path 	= require('path')


require(global.APPLICATION_PATH('listeners/default'))(req)

req
.http
.listen(process.env.PORT || config.port , function() {
    console.log('server node running...');
});