'use strict';

var _      = require('lodash'),
    fs     = require('fs');

/**
 * Resolve environment configuration by extending each env configuration file,
 * and lastly merge/override that with any local repository configuration that exists
 * in local.js
 */
var resolvingConfig = function () {
	var env = process.env.NODE_ENV || 'development';
	var conf = {};

	conf = _.extend(
		// require('./env/all'),
		require('./env/' + env) || {}
	);

	return _.merge(conf, (fs.existsSync('./config/env/local.js') && require('./env/local.js')) || {});
};

module.exports = resolvingConfig();