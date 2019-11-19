const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
	console.log(req.body);
	const { username, password } = req.body;
	const db = req.app.get('db');
	const user = await db.get_user(username).catch((error) => console.log(error));
	if (user.length > 0) {
		res.status(403).json('Username Taken');
	} else {
		const hash = await bcrypt.hash(password, 12);
		await db.signup_user(username, hash);
		req.session.user = { username };
		res.status(200).json(req.session.user);
	}
};

const login = async (req, res) => {
	console.log(req.body);
	const { username, password } = req.body;
	const db = req.app.get('db');
	const user = await db.get_user(username);
	if (user.length > 0) {
		const userMatch = await bcrypt.compare(password, user[0].password);
		if (userMatch) {
			req.session.user = {
				username: user[0].username
			};
			res.status(200).json(req.session.user);
		} else {
			res.status(403).send('username or password Incorrect');
		}
	} else {
		res.status(403).send('username does not exist');
	}
};

const logout = (req, res) => {
	req.session.destroy();
	res.sendStatus(200);
};

const getUser = (req, res, next) => {
	console.log(req.session.user);

	const { session } = req;
	if (!session.user) {
		session.user = { username: '' };
	}
	res.json(session.user);
	next();
};

module.exports = {
	signup,
	login,
	logout,
	getUser
};
