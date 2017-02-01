
var Routes = require(global.SYSTEM_PATH('Routes'))


module.exports = function(requirement){

    requirement.io.on('connection', function(socket) {
        console.log('Client Connected');
        var onevent = socket.onevent;
        socket.onevent = function (packet, callback) {
            var args = packet.data || [];
            onevent.call (this, packet, callback);    // original call
            packet.data = ["*"].concat(args);
            onevent.call(this, packet, callback);      // additional call to catch-all
        };
    
       socket.on('*', function(event, data, callback) {
            var RTS = new Routes(event)
            var CTR = global.load_controller(RTS.file)
            if(typeof CTR[RTS.function] == 'function')
            {
                CTR[RTS.function](event, data, callback)
            }
        })

        socket.on('disconnect', () => console.log('Client disconnected'));
    })
}