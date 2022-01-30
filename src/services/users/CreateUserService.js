const UserDAO = require("../../dao/UserDAO")
const userDAO = new UserDAO()

class CreateUserService {
	async register(dados) {
		return await userDAO.criarRegistro(dados)
	}
}

module.exports = CreateUserService
