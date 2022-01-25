const express = require("express")

const app = express()
const bodyParser = require("body-parser")
const config = require("config")
const routes = require("./routes")
require("dotenv").config()

routes(app)

app.use(bodyParser.json())

app.use((requisicao, resposta, proximo) => {
	// Middleware erros
})

app.listen(config.get(process.env.NODE_ENV + ".port"), () =>
	console.log("A API está funcionando!")
)
