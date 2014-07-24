var http = require('http');
var https = require('https');

http.globalAgent.maxSockets = https.globalAgent.maxSockets = Infinity;
http.Agent.defaultMaxSockets = https.Agent.defaultMaxSockets = Infinity;
