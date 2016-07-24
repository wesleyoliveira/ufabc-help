const TAG = _TAG('config.helpers');

const fs = require('fs');
const path = require('path');

// Load instantly, so that files can access helpers directly on root scope
var helpersDirectory = path.join(__dirname, '../helpers/');

// Load only the loader by default
var loader = require('../helpers/loader');

// Initialize object where helpers will be installed
app.helpers = {};

// Load all helpers (including the loader itself lol)
loader.load(helpersDirectory, app.helpers);

console.log(TAG, 'Installed Helpers:', chalk.yellow(_.keys(app.helpers).join(',')));

module.exports = function config(app, next){
	next();
}
