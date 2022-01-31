const CreateUserService = require("../CreateUserService")

jest.mock("../../../dao/UserDao")

describe("CreateUserService", () => {
	it("Should return the created user id", async () => {
		const createUserService = new CreateUserService()

		const result = await createUserService.register({
			nome: "UsuarioTest",
			email: "usuario@test.com",
			password: "senhaTeste"
		})

		expect(result.success).toBe(true)
		expect(result.obj).toHaveProperty("id")
	})
})
