"use strict";


var http = require('http');
var route = require('./route');

function onRequest(req, res) {

    console.log('onRequest');

    var body = '';

    req.on('data', function(chunk) {
        body += chunk;
    });

    req.on('end', function() {
        route.route(req, res, body);
    });
}

var server = http.createServer(onRequest);
server.listen(8080);