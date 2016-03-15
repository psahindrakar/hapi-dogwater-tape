'use strict';

module.exports = {
    db: {
        mysql: {
            adapter : 'mysql',
            host: process.env.mysql_HOST || 'localhost',
            port: process.env.mysql_PORT ||  3306,
            database: process.env.mysql_DB || 'hapi_pizza_collection',
            connectionLimit: process.env.mysql_ConnectionLimit || 10,
            user: process.env.mysql_USER || 'bitroots',
            password: process.env.mysql_PASSWORD || 'bitroots'
        }
    },
    log: {
        enabled: true,
            options: {
            console: '*'
        }
    }
};