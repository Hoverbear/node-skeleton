/*jslint node:true*/
/* The above are global variables we want JSLint to know about. */

/* # Node Skeleton #
 * LICENSE: MPL
 *
 * This is a basic template for a node.js project.
 */

// Always use ES5 in Node.js. There is no reason not to.
'use strict';

// Declare any variables you need here. You can assign too!
var http = require('http'),         // Import the `http` module.
    foo =  require("./foo"),        // An internal import
    server,                         // We'll assign it later.
    timeout = 2500;                 // Real programs deserve an API.

// Now, do whatever!

// For this example, we'll set up a simple web server.
// [See here for docs](http://nodejs.org/api/http.html#http_class_http_server)
server = http.createServer();

// Event to do when we get a request.
server.on('request', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    // Node uses HTTP chunked mode.
    res.write("Oh, why hello...<br>");
    // You can send data pretty much willy nilly. Just make sure to end it. Notice how we can send data after waiting a bit? It's ok, relax.
    setTimeout(function () {
        return res.end(foo.greeting());
    }, timeout);
});

// Listen in on port 8080.
server.listen(8080, 'localhost');
console.log("Server listening");

// What is the API for this module?
module.exports = {
    // Set the timeout with this api call.
    timeout: function (value) {
        timeout = value;
    }
};
