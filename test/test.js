require('../');
require('should');
var http = require('http');
var https = require('https');

describe('http.globalAgent', function () {
  it('should have infinite maxSockets', function () {
    http.globalAgent.maxSockets.should.equal(Infinity);
  });
});

describe('https.globalAgent', function () {
  it('should have infinite maxSockets', function () {
    http.globalAgent.maxSockets.should.equal(Infinity);
  });
});

describe('an instance of http.Agent', function () {
  it('should have infinite maxSockets', function () {
    (new http.Agent()).maxSockets.should.equal(Infinity);
  });
});

describe('an instance of https.Agent', function () {
  it('should have infinite maxSockets', function () {
    (new https.Agent()).maxSockets.should.equal(Infinity);
  });
});
