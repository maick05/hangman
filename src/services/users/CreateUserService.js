const UserDAO = require("../../dao/UserDAO")
const EmptyDataError = require("../../errors/DadosNaoFornecidos")
const HelperObject = require("../../helpers/HelperObject")
const userDAO = new UserDAO()

class CreateUserService {
	constructor(dados) {
		this.dados = dados
	}

	async register() {
		if (HelperObject.isEmpty(this.dados)) throw new EmptyDataError("user")

		return await userDAO.insert(this.dados)
	}
}

module.exports = CreateUserService
