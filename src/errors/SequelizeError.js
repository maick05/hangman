const MyError = require("./MyError")

class SequelizeError extends MyError {
	getMessage() {
		return "Sequelize Error DB -> " + this.message
	}
}

module.exports = SequelizeError
