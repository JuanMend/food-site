require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const path = require('path');
const app = express();
const { CONNECTION_STRING, SESSION_SECRET } = process.env;
const { signup, login, logout, getUser } = require('./controllers/authContr');
const {
	getHamburger,
	getPizzas,
	getChicken,
	getSushi,
	getDessert,
	getTacos,
	addFavorite,
	getFavorite,
	deleteFavorite
} = require('./controllers/foodItems');

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

app.get('/auth/getuser', getUser);
app.get('/auth/logout', logout);
app.post('/auth/signup', signup);
app.post('/auth/login', login);

// Food Items api call
app.get('/api/gethamburger', getHamburger);
app.get('/api/getpizza', getPizzas);
app.get('/api/getchicken', getChicken);
app.get('/api/getsushi', getSushi);
app.get('/api/gettacos', getTacos);
app.get('/api/getdessert', getDessert);
app.get('/api/favorites', getFavorite);
app.post('/api/favorites', addFavorite);
app.delete('/api/favorites/:id', deleteFavorite);

const PORT = 7000;

app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
