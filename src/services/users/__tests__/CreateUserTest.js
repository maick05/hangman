const CreateUserService = require("../CreateUserService")
const HelperString = require("../../../helpers/helperString")
jest.mock("../../../dao/UserDao")

describe("CreateUserService", () => {
	it("Should return the created user id", async () => {
		const createUserService = new CreateUserService()

		const result = await createUserService.register({
			name: "UsuarioTest_" + HelperString.generateRandomString(5),
			email: "usuario_" + HelperString.generateRandomString(5) + "@test.com",
			password: "senhaTeste_" + HelperString.generateRandomString(5)
		})

		expect(result.success).toBe(true)
		expect(result.obj).toHaveProperty("id")
	})
})
