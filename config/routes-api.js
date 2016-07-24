const TAG = _TAG('config.routes-app')

const express = require('express')

function config (app, next) {
  console.log(TAG, 'Configuring app routes')

  const server = app.server
  const ctrls = app.controllers
  const auth = app.helpers.isAuthenticated

	/*
	 * Configure Passport authentication
	 */
	const api = app.api = express()

	/*
	 * Api route (Admin only)
	 * Root route: /api/...
	 */
	server.use('/api/', api)

  /*
   * Base route
   */
  function restify (ctrl, path = ctrl) {
    var Ctrl = app.controllers[ctrl]
    path = '/' + path.toLowerCase()

    // * GET      /boat/:id?      -> BoatController.find
    // * POST     /boat           -> BoatController.create
    // * PUT      /boat/:id       -> BoatController.update
    // * DELETE   /boat/:id       -> BoatController.destroy

    // Shortcuts
    console.log(TAG, `restify ${ctrl} [as ${path}]`)
    api.get(path + '/create', Ctrl.create)
    api.post(path + '/create', Ctrl.create)
    api.get(path + '/update/:id', Ctrl.update)
    api.get(path + '/destroy/:id', Ctrl.delete)

    // REST
    api.get(path + '/:id?', Ctrl.associated || Ctrl.find)
    api.post(path, Ctrl.create)
    api.put(path + '/:id', Ctrl.update)
    api.delete(path + '/:id', Ctrl.delete)
  }

  // restify('User')

  next()
}

module.exports = config
