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
				allowNull: false,
				validate: {
					len: {
						args: [3],
						msg: "Name must be at least 3 chars!"
					}
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: {
					name: "unique_constraint_email_user",
					msg: "There is already an account with this email address!"
				},
				validate: {
					len: {
						args: [5],
						msg: "Email must be at least 5 chars!"
					},
					notNull: {
						args: true,
						msg: "Email should be not null!"
					},
					isEmail: {
						args: true,
						msg: "Invalid Email!"
					}
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: {
						args: [4],
						msg: "Password must be at least 4 chars!"
					}
					// is: {
					// 	args: /^[0-9a-f]{64}$/i,
					// 	msg: "Password must be at least: " + "One number and one letter"
					// }
				}
			}
		},
		{
			sequelize,
			modelName: "Users"
		}
	)
	return Users
}
