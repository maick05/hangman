const UserServices = require("../services/users")
class UserController {
	static async register(req, res, handle) {
		const dados = req.body
		try {
			const createUserService = new UserServices.CreateUserService(dados)
			const retorno = await createUserService.register()
			return res.status(200).json(retorno)
		} catch (error) {
			handle(error)
		}
	}
}

module.exports = UserController
