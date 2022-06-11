/* [ Express.js API routes for Controllers ] */
const express = require('express');
const routes = require('./controllers');

/* [ Sequelize allows you to connect to a MySQL database for Models ] */
const sequelize = require('./config/connection.js');

/* [ Node.js path module provides utilities for working with file and directory paths ] */
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // uses the 'public' folder as the root directory for static files
app.use(routes); // turn on routes

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening...'));
});