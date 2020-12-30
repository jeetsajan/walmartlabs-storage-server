"use strict";

var keywordController = require('../controllers/keyword');

module.exports = 
    [
        {
            method: 'GET',
            path: '/api/v1/keywords/{keyword}',
            handler: async (request, reply) =>  await keywordHandler(request, reply)
        }
    ];

const keywordHandler = async (request, reply) => {
    const {keyword} = request.params;
    const result = await keywordController.searchKeywordInDescriptions(keyword);
    const response = reply.response(result);
    response.type('application/json');
    return response;
}