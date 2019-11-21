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

const addFavorite = (req, res) => {
	const { chicken_id, pizza_id, sushi_id, tacos_id, dessert_id, hamburger_id, title, image } = req.body;
	console.log(req.body);
	req.session.user.favorite.push({
		chicken_id,
		pizza_id,
		sushi_id,
		tacos_id,
		dessert_id,
		hamburger_id,
		title,
		image
	});
	console.log(req.session.user.favorite);
	res.status(200).json(req.session.user.favorite);
};

const getFavorite = async (req, res) => {
	res.status(200).json(req.session.user.favorite);
};

const deleteFavorite = (req, res) => {
	const index = req.session.user.favorite.findIndex((val) => val.id === +req.params.id);
	req.session.user.favorite.splice(index, 1);
	res.status(200).json(req.session.user.favorite);
};

module.exports = {
	getHamburger,
	getPizzas,
	getChicken,
	getSushi,
	getDessert,
	getTacos,
	addFavorite,
	getFavorite,
	deleteFavorite
};
