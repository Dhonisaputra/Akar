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
    
    
    var CTR = global.load_class(RTR.class, global.APPLICATION_PATH('controllers'));
    // console.log(RTR._functionname, RTR._classname)

    // var CTR = global.load_controller(RTR.class)
    if(typeof CTR[RTR.function] == 'function')
    {
        CTR[RTR.function](event, req, res, RTR._routing_params)
    }
})
