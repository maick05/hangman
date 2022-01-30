const DAO = require("./DAO")

class UserDAO extends DAO {
	constructor() {
		super("Users")
	}
}

module.exports = UserDAO
