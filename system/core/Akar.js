global.AKAR_VERSION = '1.0.0';

// Load Server
require('./Server.js');

// load Common
require('./Common.js')

var RTR = global.load_class('Router', global.BASEPATH+'core');


global.app.get('*', function(req, res){
	var event = req.originalUrl;
	event = event.split('/');
	event = event.filter(function(res){return res != ''})
	event = event.join('/');

	RTR.set_routing(event)
    // console.log(RTR_data)
    
    
    var CTR = global.load_class(RTR._classname, global.APPLICATION_PATH('controllers'));
    // var CTR = global.load_controller(RTS.file)
    if(typeof CTR[RTR._functionname] == 'function')
    {
        CTR[RTR._functionname](event, req, res, RTR._routing_params)
    }
})
