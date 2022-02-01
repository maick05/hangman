const UserDAO = require("../../dao/UserDAO")
const EmptyDataError = require("../../errors/DadosNaoFornecidos")
const HelperObject = require("../../helpers/HelperObject")
const userDAO = new UserDAO()

class CreateUserService {
	async register(dados) {
		if (HelperObject.isEmpty(dados)) throw new EmptyDataError("user")

		return await userDAO.insert(dados)
	}
}

module.exports = CreateUserService
