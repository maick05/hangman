/* eslint-disable node/handle-callback-err */
const request = require("request")
const HelperString = require("../../../helpers/helperString")

require("dotenv").config()
const urlBase = process.env.baseUrl
jest.setTimeout(15000)

afterAll(async () => {
	await new Promise((resolve) => setTimeout(() => resolve(), 10000)) // avoid jest open handle error
})

describe("Route /users/register", (done) => {
	it("Should return status 200, success and the created user id", () => {
		request.post(
			{
				url: urlBase + "/users/register",
				form: {
					name: "UserTest_" + HelperString.generateRandomString(5),
					email: "user_" + HelperString.generateRandomString(5) + "@test.com",
					password: "passwordTest_" + HelperString.generateRandomString(5)
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

describe("Route /users/register Error Name Not Null", () => {
	it("Should return the name is_null validation error", async () => {
		request.post(
			{
				url: urlBase + "/users/register",
				form: {
					email: "user_" + HelperString.generateRandomString(5) + "@test.com",
					password: "passwordTest_" + HelperString.generateRandomString(5)
				}
			},
			function (error, response, body) {
				body = JSON.parse(body)
				// expect(response.statusCode).toBe(200)
				expect(body.success).toBe(false)
				expect(body.error.errCodes).toEqual(expect.arrayContaining(["is_null"]))
			}
		)
	})
})

describe("Route /users/register Error Email Not Null", () => {
	it("Should return the email is_null validation error", async () => {
		request.post(
			{
				url: urlBase + "/users/register",
				form: {
					name: "Red Test",
					password: "passwordTest_" + HelperString.generateRandomString(5)
				}
			},
			function (error, response, body) {
				body = JSON.parse(body)
				// expect(response.statusCode).toBe(200)
				expect(body.success).toBe(false)
				expect(body.error.errCodes).toEqual(expect.arrayContaining(["is_null"]))
			}
		)
	})
})

describe("Route /users/register Error Password Not Null", () => {
	it("Should return the pasword is_null validation error", async () => {
		request.post(
			{
				url: urlBase + "/users/register",
				form: {
					name: "Red Test",
					email: "user_" + HelperString.generateRandomString(5) + "@test.com"
				}
			},
			function (error, response, body) {
				body = JSON.parse(body)
				// expect(response.statusCode).toBe(200)
				expect(body.success).toBe(false)
				expect(body.error.errCodes).toEqual(expect.arrayContaining(["is_null"]))
			}
		)
	})
})

describe("Route /users/register Error Name Length", () => {
	it("Should return the name len validation error", async () => {
		request.post(
			{
				url: urlBase + "/users/register",
				form: {
					name: "aa",
					email: "user_" + HelperString.generateRandomString(5) + "@test.com",
					password: "passwordTest_" + HelperString.generateRandomString(5)
				}
			},
			function (error, response, body) {
				body = JSON.parse(body)
				// expect(response.statusCode).toBe(200)
				expect(body.success).toBe(false)
				expect(body.error.errCodes).toEqual(expect.arrayContaining(["len"]))
			}
		)
	})
})

describe("Route /users/register Error Invalid Email", () => {
	it("Should return the email isEmail validation error", async () => {
		request.post(
			{
				url: urlBase + "/users/register",
				form: {
					name: "Test_" + HelperString.generateRandomString(5),
					email: "user_" + HelperString.generateRandomString(5) + "-com",
					password: "passwordTest_" + HelperString.generateRandomString(5)
				}
			},
			function (error, response, body) {
				body = JSON.parse(body)
				// expect(response.statusCode).toBe(200)
				expect(body.success).toBe(false)
				expect(body.error.errCodes).toEqual(expect.arrayContaining(["isEmail"]))
			}
		)
	})
})

describe("Route /users/register Error Password Length", () => {
	it("Should return the password len validation error", async () => {
		request.post(
			{
				url: urlBase + "/users/register",
				form: {
					name: "User Test",
					email: "user_" + HelperString.generateRandomString(5) + "@test.com",
					password: "123"
				}
			},
			function (error, response, body) {
				body = JSON.parse(body)
				// expect(response.statusCode).toBe(200)
				expect(body.success).toBe(false)
				expect(body.error.errCodes).toEqual(expect.arrayContaining(["len"]))
			}
		)
	})
})

describe("Route /users/register Error Email Not Unique", () => {
	request.post(
		{
			url: urlBase + "/users/register",
			form: {
				name: "User Test",
				email: "user_test@test.com",
				password: "passwordTest_" + HelperString.generateRandomString(5)
			}
		},
		function (error, response, body) {}
	)
	it("Should return the not unique email validation error", async () => {
		request.post(
			{
				url: urlBase + "/users/register",
				form: {
					name: "User Test",
					email: "user_test@test.com",
					password: "passwordTest_" + HelperString.generateRandomString(5)
				}
			},
			function (error, response, body) {
				body = JSON.parse(body)
				// expect(response.statusCode).toBe(200)
				expect(body.success).toBe(false)
				expect(body.error.errCodes).toEqual(
					expect.arrayContaining(["not_unique"])
				)
			}
		)
	})
})
