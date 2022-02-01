/* eslint-disable node/handle-callback-err */
const request = require("request")
const HelperString = require("../../../helpers/helperString")

require("dotenv").config()
const urlBase = process.env.baseUrl
jest.setTimeout(10000)

describe("Route CreateUserService", (done) => {
	it("Should return status 200, success and the created user id", () => {
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
				body = JSON.parse(body)

				// vamos verificar se o resultado da chamada foi sucesso (200)
				expect(response.statusCode).toBe(200)
				expect(body.success).toBe(true)
				expect(body.obj).toHaveProperty("id")
			}
		)
	})
})

describe("Route CreateUserService Error Name Not Null", () => {
	it("Should return the created user id", async () => {
		request.post(
			{
				url: urlBase + "/users/register",
				form: {
					email:
						"usuario_" + HelperString.generateRandomString(5) + "@test.com",
					password: "senhaTeste_" + HelperString.generateRandomString(5)
				}
			},
			function (error, response, body) {
				body = JSON.parse(body)
				// expect(response.statusCode).toBe(200)
				expect(body.success).toBe(false)
				expect(body.errors).toEqual(expect.arrayContaining(["is_null"]))
			}
		)
	})
})
