const Services = require("./Services")

class UsersServices extends Services {
	constructor() {
		super("Users")
	}

	async register(dados) {
		return this.criaRegistro(dados)
	}
}

module.exports = UsersServices
