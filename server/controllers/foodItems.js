const getHamburger = async (req, res) => {
	const db = req.app.get('db');
	const results = await db.get_hamburger();
	res.status(200).json(results);
	console.log(results);
};

const getPizzas = async (req, res) => {
	const db = req.app.get('db');
	const results = await db.get_pizzas();
	res.status(200).json(results);
	console.log(results);
};

const getChicken = async (req, res) => {
	const db = req.app.get('db');
	const results = await db.get_chicken();
	res.status(200).json(results);
};

const getSushi = async (req, res) => {
	const db = req.app.get('db');
	const results = await db.get_sushi();
	res.status(200).json(results);
};

const getDessert = async (req, res) => {
	const db = req.app.get('db');
	const results = await db.get_dessert();
	res.status(200).json(results);
};

const getTacos = async (req, res) => {
	const db = req.app.get('db');
	const results = await db.get_tacos();
	res.status(200).json(results);
};

module.exports = {
	getHamburger,
	getPizzas,
	getChicken,
	getSushi,
	getDessert,
	getTacos
};
