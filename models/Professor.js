/*!
 * Module dependencies
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
// var ObjectId = Schema.Types.ObjectId
var PluginTimestamp = require('mongoose-timestamp')

/**
 * User schema
 */

var Model = new Schema({
  name: {
    type: String,
    required: true,
  },

  center: {
    type: String,
    default: '',
  },

  email: {
    type: String,
    default: '',
  },

  email2: {
    type: String,
    default: '',
  },

  siape: {
    type: String,
    default: '',
  },

  active: {
    type: Boolean,
    default: false,
  },
})

/**
 * User plugin
 */

Model.plugin(PluginTimestamp)

/**
 * Hooks
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

Model.method({

})

/**
 * Statics
 */

Model.static({

})

/**
 * Register
 */

mongoose.model('Professor', Model)
