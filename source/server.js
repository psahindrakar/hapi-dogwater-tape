'use strict'

const server = require('./config/hapi')();

server.serverEventHandler.on('plugins_registered', function() {
    server.start(function(err) {
		if (err) { throw err; }
		server.serverEventHandler.emit('server_running');
	});
});

module.exports = server;