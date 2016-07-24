const TAG = _TAG('config.express-assets')

const path = require('path')
const express = require('express')

function config(app, next){
  console.log(TAG, 'Setup static serving')

  // Static files middleware
	app.server.use(express.static(app.config.root + '/public'))

	next()
}

module.exports = config
