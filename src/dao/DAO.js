const database = require("../models")
const HelperArray = require("../helpers/helperArray")

class DAO {
	constructor(nomeDoModelo) {
		this.nomeDoModelo = nomeDoModelo
	}

	async pegarTodosOsRegistros(where = {}) {
		return database[this.nomeDoModelo].findAll({ where: { ...where } })
	}

	async pegarUmRegistro(where = {}) {
		return database[this.nomeDoModelo].findOne({ where: { ...where } })
	}

	async insert(dados) {
		// try {
		const obj = await database[this.nomeDoModelo].create(dados)
		return {
			success: true,
			message: "Created successful",
			obj: obj
		}
		// } catch (err) {

		// }
	}

	async atualizarRegistro(dadosAtualizados, id, transacao = {}) {
		return database[this.nomeDoModelo].update(
			dadosAtualizados,
			{ where: { id: id } },
			transacao
		)
	}

	async atualizarRegistros(dadosAtualizados, where, transacao = {}) {
		return database[this.nomeDoModelo].update(
			dadosAtualizados,
			{ where: { ...where } },
			transacao
		)
	}

	async apagarRegistro(id) {
		return database[this.nomeDoModelo].destroy({ where: { id: id } })
	}

	async restaurarRegistro(id) {
		return database[this.nomeDoModelo].restore({ where: { id: id } })
	}

	async consultarRegistroApagado(id) {
		return database[this.nomeDoModelo].findOne({
			paranoid: false,
			where: { id: Number(id) }
		})
	}

	async encontrarEContaRegistros(where = {}, agregadores) {
		return database[this.nomeDoModelo].findAndCountAll({
			where: { ...where },
			...agregadores
		})
	}

	handleError(err) {
		return {
			success: false,
			message: "Error DB. " + err.message,
			errors: HelperArray.arrayColumn(err.errors, "validatorKey"),
			typeError: err.name,
			err: err
		}
	}
}

module.exports = DAO
