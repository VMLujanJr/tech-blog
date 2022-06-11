const Sequelize = require('sequelize'); // import Sequelize constructor from the library
require('dotenv').config(); // ...helps keep our sign-in details private; .env file

/* [ Connection to Database; pass in MySQL login info; .env file ] */
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
});

module.exports = sequelize;