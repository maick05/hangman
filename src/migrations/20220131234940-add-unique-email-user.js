"use strict"
module.exports = {
	async up(queryInterface, Sequelize) {
		console.log("teste")
		try {
			await queryInterface.addConstraint("Users", {
				fields: ["email"],
				type: "unique",
				name: "unique_constraint_email_user"
			})
		} catch (err) {
			console.log("Error" + err.message)
		}
	},
	async down(queryInterface, Sequelize) {
		try {
			await queryInterface.removeIndex("unique_constraint_email_user")
		} catch (err) {
			console.log("Error" + err.message)
		}
	}
}
