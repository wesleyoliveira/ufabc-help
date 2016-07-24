const TAG = _TAG('config.routes-app')

const express = require('express')

function config(app, next){
  console.log(TAG, 'Configuring app routes')

  const server = app.server
  const ctrls = app.controllers
  const auth = app.helpers.isAuthenticated

	/*
	 * Base route
	 */
	function restify(ctrl, path = ctrl){
		var Ctrl = app.controllers[ctrl]
		path = '/' + path.toLowerCase()

    // * GET      /boat/:id?      -> BoatController.find
    // * POST     /boat           -> BoatController.create
    // * PUT      /boat/:id       -> BoatController.update
    // * DELETE   /boat/:id       -> BoatController.destroy

    // Shortcuts
    console.log(TAG, `restify ${ctrl} [as ${path}]`)
		server.get(path+'/create',            auth, Ctrl.create)
		server.post(path+'/create',           auth, Ctrl.create)
		server.get(path+'/update/:id',        auth, Ctrl.update)
		server.get(path+'/destroy/:id',       auth, Ctrl.destroy)

    // REST
		server.get(path+'/:id?',              auth, Ctrl.associated || Ctrl.find)
		server.post(path,                     auth, Ctrl.create)
  	server.put(path+'/:id',               auth, Ctrl.update)
		server.delete(path+'/:id',            auth, Ctrl.destroy)
	}

  

	next()
}

module.exports = config
