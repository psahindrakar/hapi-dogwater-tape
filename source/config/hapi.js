'use strict'

const Hapi = require('hapi');
const plugins = require('./plugins');
const EventEmitter = require('events');

module.exports = function(options) {
	var serverOptions = {};
	var server = new Hapi.Server(serverOptions);

	var serverEventHandler = new EventEmitter();	
	server.serverEventHandler = serverEventHandler;

	server.connection({
		host: 'localhost',
		port: process.env.PORT || 8070
	});

	server.register(plugins, function(err) {			
			if (err) { throw err; };
			server.serverEventHandler.emit('plugins_registered');
		}
	);

	return server; 
}