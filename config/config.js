const path = require('path')
const extend = require('util')._extend

const ENV = process.env.NODE_ENV || 'development'
const enviroment = require('./env/' + ENV)

var defaults = {
  root: path.normalize(path.join(__dirname, '/..')),
  env: ENV,
}

// Expose
module.exports = extend(enviroment, defaults)
