/* the 'main' file,
 * consisting the modules declarations, configs
 * databases, express settings, routes
 * finally, start the server
 */

/** modules **/
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

/* configs */
// DATABASE
var db = require('./config/db');
// connect to mongoDB database. Change /config/db.js url later
mongoose.connect(db.url);

// WALLPAPER - sample mongoose model
var Wallpaper = require('./app/models/wallpaper.js');

// localhost:8080
var port = process.env.PORT || 8080;

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true}));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

/* routes */
require('./app/routes')(express, app);

/* set up the app */
app.listen(port);
console.log("Port " + port + " is listening...");
exports = module.exports = app;
