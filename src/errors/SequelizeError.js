const MyError = require("./MyError")

class SequelizeError extends MyError {
	getMessage() {
		return "Sequelize Error -> " + this.message
	}
}

module.exports = SequelizeError
