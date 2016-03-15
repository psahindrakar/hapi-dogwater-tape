'use strict';

/**
 * Module dependencies.
 */

var Config = require('./config');

/**
 * Module init function.
 */
module.exports = {

  getLogReporters: function () {

    var reporters = [];

    if ('console' in Config.log.options) {
        reporters.push({
            reporter: require('good-console'),
            events: { response: Config.log.options.events, request: '*', log: '*', error: '*', ops: '*'}
        });
    }else if ('stream' in Config.log.options) {
      reporters.push({
        reporter: require('good-file'),
        events: { response: '*', request: '*', log: '*', error: '*', ops: '*'},
        config: {
            path: './logs/',
            prefix: 'vts'
        }
      });
    }

    return reporters;
  }
};