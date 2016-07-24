const env = process.env
const port = process.env.PORT || 8000

module.exports = {
	port: port,
	domain: env.DOMAIN || 'http://ufabchelp.herokuapp.com.br',

	session: {
		secret: 'somesecretstring',
	},

	db: env.MONGODB_URI,

}
