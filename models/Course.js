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
  code: {
    type: Number,
    default: null,
  },

  name: {
    type: String,
    default: '',
  },

  facebook: {
    type: String,
    default: null,
  },

  description: {
    type: String,
    default: '',
  },

  recomendation: [{
    type: String,
  }]

  T: {
    type: Number,
    default: 0,
  },

  P: {
    type: Number,
    default: 0,
  },

  I: {
    type: Number,
    default: 0,
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

mongoose.model('Course', Model)
