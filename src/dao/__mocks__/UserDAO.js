class UserDAO {
	insert(dados) {
		return {
			success: true,
			message: "Created successful",
			obj: {
				id: 500,
				nome: "UsuarioTest",
				email: "usuario@test.com",
				password: "senhaTeste",
				createdAt: "10/12/2022",
				updatedAt: "10/12/2022",
				versao: 90
			}
		}
	}
}

module.exports = UserDAO
