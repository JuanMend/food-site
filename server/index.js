require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const { signup, login, logout } = require('./controllers/authContr');

app.use(express.json());

massive(CONNECTION_STRING).then((db) => {
	app.set('db', db);
	console.log('DB Connected');
});

app.use(
	session({
		resave: true,
		saveUninitialized: false,
		secret: SESSION_SECRET,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 7
		}
	})
);

app.listen(SERVER_PORT, () => {
	console.log(`Listening on ${SERVER_PORT}`);
});
