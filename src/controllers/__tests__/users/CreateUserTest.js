const request = require("request")
const HelperString = require("../../../helpers/helperString")

require("dotenv").config()
const urlBase = process.env.baseUrl
jest.mock("../../../dao/UserDao")

describe("Route CreateUserService", () => {
	it("Should return status 200, success and the created user id", (done) => {
		request.post(
			{
				url: urlBase + "/users/register",
				form: {
					name: "UsuarioTest_" + HelperString.generateRandomString(5),
					email:
						"usuario_" + HelperString.generateRandomString(5) + "@test.com",
					password: "senhaTeste_" + HelperString.generateRandomString(5)
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
