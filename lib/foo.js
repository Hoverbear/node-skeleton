/*jslint node:true*/

/* # Foo #
 * LICENSE: MPL
 *
 * This is a basic module 
 */

// Always use ES5 in Node.js. There is no reason not to.
'use strict';

/* This is a simple module you can base yours off of.
 */
    
// Declare any variables you need here. You can assign too!
var api = {};

// Now, do whatever!
api.greeting = function () {
    return "This is from `lib/foo.js`";
};


// Return an API object. Don't be afraid to construct this above.
module.exports = api;