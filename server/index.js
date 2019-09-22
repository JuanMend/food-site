const express = require('express');
const session = require('express-session');
const app = express();
// const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const { signup, login, logout } = require('./controllers/authContr');
const PORT = 7000;
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
