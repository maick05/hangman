const HelperArray = require("../helpers/HelperArray")

class MyError extends Error {
	constructor(err) {
		super(err.message)
		this.name = err.name
		this.message = err.message
		this.errorInstance = err
	}

	getMessage() {
		return "Error -> " + this.message
	}

	getErrorResponse() {
		return {
			errCodes: HelperArray.arrayColumn(
				this.errorInstance.errors,
				"validatorKey"
			),
			typeError: this.name,
			err: this.errorInstance
		}
	}

	getStatusCode() {
		return 500
	}
}

module.exports = MyError
