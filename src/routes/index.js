const bodyParser = require("body-parser")

const users = require("./usersRoute")

module.exports = (app) => {
	app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }), users)

	// app.use((requisicao, resposta, proximo) => {
	// 	console.log("middleware")
	// 	// Middleware erros
	// 	resposta.status(200).json()
	// })
}
