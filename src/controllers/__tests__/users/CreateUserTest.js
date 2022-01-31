const request = require("request")
require("dotenv").config()
const urlBase = process.env.baseUrl
jest.mock("../../../dao/UserDao")

describe("Route CreateUserService", () => {
	it("Should return status 200, success and the created user id", (done) => {
		request.post(
			{
				url: urlBase + "/users/register",
				form: {
					name: "UsuarioTest",
					email: "usuario@test.com",
					password: "senhaTeste"
				}
			},
			function (error, response, body) {
				if (error) console.log(error)

				body = JSON.parse(body)

				// vamos verificar se o resultado da chamada foi sucesso (200)
				expect(response.statusCode).toBe(200)
				expect(body.success).toBe(true)
				expect(body.obj).toHaveProperty("id")
				done()
			}
		)
	})
})
