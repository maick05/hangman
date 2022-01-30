const UserDAO = require("../../dao/UserDAO")
const userDAO = new UserDAO()

class CreateUserService {
	async register(dados) {
		console.log(userDAO)
		return userDAO.criarRegistro(dados)
	}
}

module.exports = CreateUserService
