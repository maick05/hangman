const express = require("express")

const app = express()
const bodyParser = require("body-parser")
const config = require("config")

app.use(bodyParser.json())

app.use((requisicao, resposta, proximo) => {
	// Middleware erros
})

app.listen(config.get("api.porta"), () =>
	console.log("A API está funcionando!")
)
