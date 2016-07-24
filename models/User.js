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
  // Flag indicating if it's a professor
  // professor: {
  //   type: Boolean,
  //   default: false,
  // }

  name: {
    type: String,
    default: '',
  },

  ra: {
    type: Number,
  },

  campus: {
    type: String,
    default: '',
  },

  periodo: {
    type: String,
    default: '',
  },

  ingresso: {
    type: Number,

  },

  email: {
    type: String,
    default: '',
    unique: true,
  },

  hashed_password: {
    type: String,
    default: '',
  },

  salt: {
    type: String,
    default: '',
  },

  facebook: {
    id: String,
    token: String,
    tokenSecret: String,

    firstName: String,
    lastName: String,
    username: String,
    genero: String,

    gender: String,
    birthday: String,
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

mongoose.model('User', Model)
