'use strict';

const Hapi = require('hapi');

const constants = require('./src/config/constants');

const cachedItems = require('./src/config/cachedItems');

const server = Hapi.server({port: constants.application.port, host: constants.application.host});

const routes = require('./src/routes');

for(let route in routes) {
    server.route(routes[route]);
}

const init = async () => {
    await cachedItems();
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();