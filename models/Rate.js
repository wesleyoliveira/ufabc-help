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
  _user: {
		type: ObjectId,
		ref: 'User',
		required: true,
	},

  _professor: {
		type: ObjectId,
		ref: 'Professor',
		required: true,
	},

  _class: {
		type: ObjectId,
		ref: 'Course',
		required: true,
	},

  visible: {
    type: Boolean,
    default: false,
  },

  message: {
    type: String,
    required: true,
  },

  likes: [{
    type: ObjectId,
    ref: 'User',
  }],

  dislikes: [{
    type: ObjectId,
    ref: 'User'
  }],

  reply: {
    timestamp: {
      type: Date,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  }
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

mongoose.model('Rate', Model)
