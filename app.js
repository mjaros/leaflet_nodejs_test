/**
 * Dependencies
 */

var path = require('path');
var fs = require('fs');
var connect = require('connect');
var http = require('http');

/**
 * Environment
 */

if (typeof process.env.NODE_ENV == 'undefined') {
  process.env.NODE_ENV = 'development';
}
var env = process.env.NODE_ENV;

/**
 * Logging
 */

function log(message) {
  var message = '['+new Date().toUTCString()+'] ' + message;
  fs.appendFile(__dirname + '/log/' + env + '.log', message + '\n', function(err) {});
  console.log(message);
}

/**
 * HTTP server
 */

function startHTTPServer() {
  var httpLogFile = fs.createWriteStream(__dirname + '/log/http_server.log', {flags: 'a'});
  var app = connect()
    .use(connect.logger({stream: httpLogFile}))
    .use(connect.static('public'));
  httpServer = http.createServer(app).listen(8002);
  log('HTTP Server started');
}

startHTTPServer();