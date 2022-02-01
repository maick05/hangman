const MyError = require("./MyError")

class EmptyDataError extends MyError {
	constructor(element = "") {
		const msg = "The " + element + " data cannot be empty"
		super({ name: "EmptyDataError", message: msg })
	}
}

module.exports = EmptyDataError
