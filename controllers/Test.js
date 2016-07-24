var async = require('async')

var Request = app.helpers.Request
var Model = app.models.Test

var Models = app.models

var renderFields = null

exports.get = Request.get(Model, {
	                    deny: [],
	                    renderFields: renderFields,
})

exports.find = Request.find(Model, {
  deny: [],
	                    queryFields: null,
	                    renderFields: renderFields,
})

exports.create = Request.create(Model, {
  deny: [],
	                    renderFields: renderFields,
})

exports.update = Request.update(Model, {
  deny: [],
	                    renderFields: renderFields,
})

exports.delete = Request.destroy(Model, {
  deny: [],
	                    renderFields: renderFields,
})
