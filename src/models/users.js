"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Users.init(
		{
			name: DataTypes.STRING,
			email: {
				type: DataTypes.STRING,
				validate: {
					isEmail: {
						args: true,
						msg: "Email inválido!"
					}
				}
			},
			password: {
				type: DataTypes.STRING
				// validate: {
				// 	is: /^[0-9a-f]{64}$/i
				// }
			}
		},
		{
			sequelize,
			modelName: "Users"
		}
	)
	return Users
}
