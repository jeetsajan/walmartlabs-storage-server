
"use strict";

var request = require('supertest');
require('should');
var server = request.agent("http://localhost:3000");

describe('Task routes', function () {
    describe('GET /api/v1/keywords/{keyword}', function () {
        it('should return statusCode 404', function (done) {
            
            server
                .get('/api/v1/keywords/backpack/2/10')
                .expect("Content-type", /json/)
                .expect(404)
                .end(function (err, res) {
                    res.status.should.equal(404);
                    done();
                });
        });
        it('should return statusCode 404', function (done) {
            
            server
                .get('/api/v1/keywords/backpack/2')
                .expect("Content-type", /json/)
                .expect(404)
                .end(function (err, res) {
                    res.status.should.equal(404);
                    done();
                });
        });

        it('should return statusCode 200, and body length is 3', function (done) {
            
            server
                .get('/api/v1/keywords/Backpack')
                .expect("Content-type", /json/)
                .expect(200)
                .end(function (err, res) {
                    res.status.should.equal(200);
                    res.body.should.have.length(3);
                    done();
                });
        });
    });
});