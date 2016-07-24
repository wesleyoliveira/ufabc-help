var TAG = 'server'

/**
 * Module dependencies
 */

var async = require('async')

/**
 * Global App Object
 */
var app = {
	config: require('./config/config'),
}

/**
 * Define Globals
 */
global.app = app;

global._ = require('lodash');
global.chalk = require('chalk');
global._TAG = function (tag){
  return chalk.yellow(`[${tag}]`);
}

/*
 * Bootstrap Process
 */
var configSetps = [
	// Bootstrap Helpers
	require('./config/helpers'),

	// Bootstrap Models and connect to DB
	require('./config/models'),

	// Bootstrap Controllers
	require('./config/controllers'),

  // Bootstrap application settings
	require('./config/express'),

  // Build Assets
  // require('./config/build'),

	// Start static serving on /public folder
	require('./config/express-assets'),

  // Bootstrap API routes
	require('./config/routes-app'),

  // Bootstrap routes
  require('./config/routes'),

	// Start Server
	require('./config/lift'),
]

//
// Execute config steps and lift app
//
module.exports = function lift (cb) {
  async.eachSeries(configSetps, function (config, next) {
    // Call configuration step with the app, and the callback
    config(app, next)
  }, function (err) {
    if (err) {
      console.error(_TAG(TAG), 'Failed to initialize Server: %s', err)

      if (!cb) {
        throw err
      }

      cb && cb(err)
    }

    console.log(_TAG(TAG, 'green'), 'Lifted. Port:', app.config.port, `[${app.config.env}]`)
    cb && cb()
  })
}

//
// Autolift if it's the root module
//
if (require.main === module) {
  module.exports()
}
