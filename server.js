/* [ Express.js API routes for Controllers ] */
const express = require('express');
const routes = require('./controllers');

/* [ Sequelize allows you to connect to a MySQL database for Models ] */
const sequelize = require('./config/connection.js');

/* [ Node.js path module provides utilities for working with file and directory paths ] */
const path = require('path');

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
    secret: 'secretomg',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // uses the 'public' folder as the root directory for static files
app.use(session(sess));
app.use(routes); // turn on routes

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening...'));
});