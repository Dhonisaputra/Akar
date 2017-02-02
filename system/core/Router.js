var RTR = global.load_class('Router', global.BASEPATH+'library', 'Co');

module.exports = class Router
{
	construction()
	{
		this._classname;
		this._functionname
	}
	set_routing(event)
	{
		var RTR_data = RTR.routing(event)
		this._classname 	= RTR_data.file;
		this._functionname 	= RTR_data.function;
		this._routing_params 	= RTR_data.params;
	}

	class_name()
	{
		return this._classname;
	}
	function_name()
	{
		return this._functionname;
	}
}
