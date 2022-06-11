/* [ USER TABLE RULES; A.K.A. USER MODEL ] */
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

/* [...create User model] */
class User extends Model {
    /* [...setup method to run on instance data (per user) to check password] */
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password); // this.password = hashed password
    }
}

/* [...define table columns and configuration] */
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        /* missing hooks; intercepts password before creating or updating
            beforeCreate password
            beforeUpdate password
        */
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;