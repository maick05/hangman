const bodyParser = require("body-parser")
const HelperArray = require("../helpers/helperArray")

const users = require("./usersRoute")

module.exports = (app) => {
	app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }), users)

	app.use((err, req, res, next) => {
		res.status(500).json({
			success: false,
			message: "Error -> " + err.message,
			errors: HelperArray.arrayColumn(err.errors, "validatorKey"),
			typeError: err.name,
			err: err
		})
	})
}
