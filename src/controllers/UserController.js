const UsersServices = require("../services/UsersServices")
const usersServices = new UsersServices()

class UserController {
	static async register(req, res) {
		const { estudanteId, matriculaId } = req.params
		try {
			const umaMatricula = await usersServices.pegaUmRegistro({
				id: matriculaId,
				estudante_id: estudanteId
			})
			return res.status(200).json(umaMatricula)
		} catch (error) {
			return res.status(500).json(error.message)
		}
	}
}

module.exports = UserController
