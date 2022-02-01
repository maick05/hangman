const EmptyDataError = require("../../../errors/DadosNaoFornecidos")
const CreateUserService = require("../CreateUserService")
jest.mock("../../../dao/UserDao")

describe("CreateUserService Green Test", () => {
	it("Should return the created user id", async () => {
		const createUserService = new CreateUserService()

		const result = await createUserService.register({
			name: "UsuarioTest",
			email: "usuario" + "@test.com",
			password: "senhaTeste"
		})

		expect(result.success).toBe(true)
		expect(result.obj).toHaveProperty("id")
	})
})

describe("CreateUserService Empty Data Error Test", () => {
	it("Should return empty user data error", async () => {
		const createUserService = new CreateUserService()

		await expect(async () => {
			await createUserService.register({})
		}).rejects.toThrowError(EmptyDataError)
	})
})
