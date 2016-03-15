"use strict"

var pizza_controller = require('./pizza_controller');

module.exports = [
	{
		path : '/pizza',
		method : 'GET',
		config : {
			handler : pizza_controller.getPizzas
		}
	},
	{
		path : '/pizza',
		method : 'POST',
		config : {
			handler : pizza_controller.addPizza
		}
	}
]