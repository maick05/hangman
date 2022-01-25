const bodyParser = require("body-parser")

const users = require("./usersRoute")

module.exports = (app) => {
	app.use(
		bodyParser.json(),
		bodyParser.urlencoded({ extended: false }),
		users
	)
}
