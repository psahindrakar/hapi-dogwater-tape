'use strict'

var routes = require('./pizza_routes');

exports.register = function(server, options, next) {	
	server.route(routes);
	next();
}

exports.register.attributes = {
	name: 'Pizza module'
}