const env = process.env
const port = process.env.PORT || 3000
const domain = 'http://localhost:'+port

module.exports = {
	port: port,
	domain: domain,

	session: {
		secret: 'somesecretstring',
	},

	db: env.MONGODB_URL || 'mongodb://localhost:27017/ufabchelp',

}
