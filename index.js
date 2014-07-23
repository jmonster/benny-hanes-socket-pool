var Http = require('http');
var Https = require('https');

Http.globalAgent.maxSockets = Https.globalAgent.maxSockets = Infinity;
