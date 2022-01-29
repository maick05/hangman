const express = require("express")

const app = express()
const config = require("config")
const routes = require("./routes")
require("dotenv").config()

routes(app)

app.listen(config.get(process.env.NODE_ENV + ".api.port"), () =>
	console.log("A API está funcionando!")
)
