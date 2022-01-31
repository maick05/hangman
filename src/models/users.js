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
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isEmail: {
						args: true,
						msg: "Email inválido!"
					}
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
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
