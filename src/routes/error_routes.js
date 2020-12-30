"use strict";

module.exports = 
    [
        {
            method: 'GET',
            path: '/{any*}',
            handler: (request, reply) => reply.response('error router').code(404) 
        },
    ];