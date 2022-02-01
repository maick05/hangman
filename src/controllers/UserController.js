const UserServices = require("../services/users")
const createUserService = new UserServices.CreateUserService()

class UserController {
	static async register(req, res, handle) {
		const dados = req.body
		try {
			const retorno = await createUserService.register(dados)
			return res.status(200).json(retorno)
		} catch (error) {
			handle(error)
		}
	}
}

module.exports = UserController
