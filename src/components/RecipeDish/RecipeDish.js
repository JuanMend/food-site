import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getHamburges, getPizza } from '../../Redux/food';
import { getUser } from '../../Redux/reducer';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './RecipeDish.css';

class Recipe extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	componentDidMount() {
		this.props.getUser();
	}

	// getItems = () => {
	// 	console.log(this.state.hamburgers);
	// 	axios.get(`/api/gethamburger/${this.props.match.params.id}`).then((res) => {
	// 		this.setState({ hamburgers: res.data });
	// 	});
	// };
	render() {
		let arrHamburger = '';
		arrHamburger = this.props.hamburgers.map((val) => {
			if (val.hamburger_id === parseInt(this.props.match.params.hamburger_id)) {
				return (
					<div className="mainHamburger">
						<img src={val.image} className="hamburgerImage" />
						<h1>{val.title}</h1>
						<ul className="ulList">
							<li>2 pounds ground beef</li>
							<li>3/4 cup dry bread crumbs</li>
							<li>3 tablespoons evaporated milk</li>
							<li>2 tablespoons Worcestershire sauce</li>
							<li>2 cloves garlic, minced</li>
						</ul>
						<div className="btnDiv">
							<Link to="/">
								<button className="homeBtn">Home</button>
							</Link>
							<Link to="/recipes">
								<button className="recipesBtn">Recipes</button>
							</Link>
						</div>
					</div>
				);
			}
		});

		let arrPizza = '';
		arrPizza = this.props.pizzas.map((val) => {
			if (val.pizza_id === parseInt(this.props.match.params.pizza_id)) {
				return (
					<div className="mainPizza">
						<img src={val.image} className="pizzaImage" />
						<h1>{val.title}</h1>
						<ul className="ulList">
							<li>1 (1 pound) loaf frozen bread dough, thawed</li>
							<li>1 pound bulk Italian sausage</li>
							<li>2 cups shredded mozzarella cheese</li>
							<li>8 ounces sliced fresh mushrooms</li>
							<li>1 (28 ounce) can diced tomatoes, drained</li>
							<li>1/2 cup freshly grated Parmesan cheese</li>
						</ul>
						<div className="btnDiv">
							<Link to="/">
								<button className="homeBtn">Home</button>
							</Link>
							<Link to="/recipes">
								<button className="recipesBtn">Recipes</button>
							</Link>
						</div>
					</div>
				);
			}
		});

		let arrChicken = '';
		arrChicken = this.props.chickens.map((val) => {
			if (val.chicken_id === parseInt(this.props.match.params.chicken_id)) {
				return (
					<div className="mainChicken">
						<img src={val.image} className="chickenImage" />
						<h1>{val.title}</h1>
						<ul className="ulList">
							<li>2 tablespoons of butter </li>
							<li>1 large onion sliced salt</li>
							<li>4 teaspoons white sugar </li>
							<li>1 pound Yukon Gold potatoes</li>
							<li> 2 tablespoons olive oil 6 bone-in</li>
							<li> 2 tablespoons chopped fresh rosemaryground black pepper</li>
						</ul>
						<div className="btnDiv">
							<Link to="/">
								<button className="homeBtn">Home</button>
							</Link>
							<Link to="/recipes">
								<button className="recipesBtn">Recipes</button>
							</Link>
						</div>
					</div>
				);
			}
		});

		let arrSushi = '';
		arrSushi = this.props.sushi.map((val) => {
			if (val.sushi_id === parseInt(this.props.match.params.sushi_id)) {
				return (
					<div className="mainSushi">
						<img src={val.image} className="sushiImage" />
						<h1>{val.title}</h1>
						<ul className="ulList">
							<li>2/3 cup uncooked short-grain white rice</li>
							<li>1/2 teaspoons salt4 sheets nori seaweed sheets</li>
							<li>3 tablespoons rice vinegar</li>
							<li>3 tablespoons white sugar</li>
						</ul>
						<div className="btnDiv">
							<Link to="/">
								<button className="homeBtn">Home</button>
							</Link>
							<Link to="/recipes">
								<button className="recipesBtn">Recipes</button>
							</Link>
						</div>
					</div>
				);
			}
		});
		let arrTacos = '';
		arrTacos = this.props.tacos.map((val) => {
			if (val.tacos_id === parseInt(this.props.match.params.tacos_id)) {
				return (
					<div className="mainTacos">
						<img src={val.image} className="tacosImage" />
						<h1>{val.title}</h1>
						<ul className="ulList">
							<li>1 cup all-purpose flour 1 egg 1 teaspoon minced capers </li>
							<li>2 tablespoons cornstarch</li>
							<li>1 teaspoon baking powder</li>
							<li>1/2 teaspoon dried oregano</li>
							<li>1/2 teaspoon ground cumin</li>
							<li>1/2 teaspoon dried dill weed</li>
						</ul>
						<div className="btnDiv">
							<Link to="/">
								<button className="homeBtn">Home</button>
							</Link>
							<Link to="/recipes">
								<button className="recipesBtn">Recipes</button>
							</Link>
						</div>
					</div>
				);
			}
		});
		let arrDessert = '';
		arrDessert = this.props.desserts.map((val) => {
			if (val.dessert_id === parseInt(this.props.match.params.dessert_id)) {
				return (
					<div className="mainDessert">
						<img src={val.image} className="dessertImage" />
						<h1>{val.title}</h1>

						<ul className="ulList">
							<li>1 (18 ounce) package refrigerated sugar cookie dough </li>
							<li>1 (8 ounce) container frozen whipped topping</li>
							<li>1/2 cup sliced banana</li>
						</ul>
						<div className="btnDiv">
							<Link to="/">
								<button className="homeBtn">Home</button>
							</Link>
							<Link to="/recipes">
								<button className="recipesBtn">Recipes</button>
							</Link>
						</div>
					</div>
				);
			}
		});
		return (
			<div>
				{arrHamburger}
				{arrPizza}
				{arrChicken}
				{arrSushi}
				{arrTacos}
				{arrDessert}
				<Footer />
			</div>
		);
	}
}

const MapStateToProps = (state) => {
	return {
		hamburgers: state.food.hamburgers,
		pizzas: state.food.pizzas,
		chickens: state.food.chickens,
		sushi: state.food.sushi,
		desserts: state.food.desserts,
		tacos: state.food.tacos
	};
};
export default connect(MapStateToProps, { getUser })(Recipe);
