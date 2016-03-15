'use strict'

const config = require('./config');
const mysql = require('sails-mysql');

var dogwaterOptions = {
	adapters : {
		mysql : mysql
	},
	connections : {
		pizzaDb : config.db.mysql
	},
	models : [ require('../modules/pizza/models/pizza.js') ]
}

var plugins = [
	require('blipp'), 
	{
		register : require('dogwater'),
		options : dogwaterOptions
	},
	require('../modules/pizza')
];

module.exports = plugins;