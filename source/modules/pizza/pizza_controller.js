'use strict';

var pizza = require('./models/pizza.js');

exports.getPizzas = function(req, res) {
	var pizza_collection = req.collections.pizza;	
	res(pizza_collection.find()).code(200);
}

exports.addPizza = function(req, res) {
	var pizza_collection = req.collections.pizza;	
	var pizza = {
		name : 'Chicken thin crust',
		ingredients : ['bread', 'tomato sauce']
	}
	res(pizza_collection.create(pizza)).code(200);
}