const CreateUserService = require("../CreateUserService")

describe("CreateUserService", () => {
	// beforeAll(async () => {
	// 	// const connection = await createConnection()
	// 	// await connection.runMigrations()
	// 	jest.useFakeTimers()
	// })

	// afterAll(async () => {
	// 	const connection = getConnection()
	// 	await connection.query("DELETE FROM usuarios")
	// 	await connection.close()
	// })

	it("Deve retornar o id do usuário criado", async () => {
		const createUserService = new CreateUserService()

		const result = await createUserService.register({
			nome: "UsuarioTest",
			email: "usuario@test.com",
			password: "senhaTeste"
		})

		expect(result.success).toBe(true)
		// expect(result.obj).toHaveProperty("id")
	})
})
