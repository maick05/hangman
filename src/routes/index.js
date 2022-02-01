const bodyParser = require("body-parser")

const users = require("./usersRoute")

module.exports = (app) => {
	app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }), users)

	app.use((err, req, res, next) => {
		res.status(500).json({
			success: false,
			message: err.getMessage(),
			error: err.getErrorResponse()
		})
	})
}
