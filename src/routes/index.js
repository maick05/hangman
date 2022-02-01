const bodyParser = require("body-parser")
const MyError = require("../errors/MyError")

const users = require("./usersRoute")

module.exports = (app) => {
	app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }), users)

	app.use((err, req, res, next) => {
		if (!(err instanceof MyError)) err = new MyError(err)

		res.status(err.getStatusCode()).json({
			success: false,
			message: err.getMessage(),
			error: err.getErrorResponse()
		})
	})
}
