const UserServices = require("../services/users")
const createUserService = new UserServices.CreateUserService()

class UserController {
	static async register(req, res) {
		const dados = req.body
		try {
			const retorno = await createUserService.register(dados)
			return res.status(200).json(retorno)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
}

module.exports = UserController
