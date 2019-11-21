import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { getUser } from '../../Redux/reducer';
import { getFavorites, deleteFavorite, getHamburgers, getChicken } from '../../Redux/food';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Favorites.css';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

class Favorites extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getUser();
		this.props.getFavorites();
		this.props.getChicken();
		this.props.getHamburgers();
	}

	render() {
		console.log(this.props.favorites);
		// if(this.props.chickens === val.chicken_id){

		// }

		const post = this.props.favorites.map((val) => {
			return (
				<div className="mainFavorite">
					<Card className="cardFavorite">
						<CardHeader title={val.title} />
						<img src={val.image} className="cardImages" />

						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								{/* Btn for Ingredients */}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<button className="deleteBtn" onClick={() => this.props.deleteFavorite(val.id)}>
								Delete
							</button>
							{val.pizza_id === parseInt(val.pizza_id) ? (
								<Link to={`/recipe/${val.pizza_id}`} style={{ textDecoration: 'none', color: 'black' }}>
									<button className="recipeBtn">See Recipe</button>
								</Link>
							) : val.chicken_id === parseInt(val.chicken_id) ? (
								<Link
									to={`/recipetwo/${val.chicken_id}`}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<button className="recipeBtn">See Recipe</button>
								</Link>
							) : val.sushi_id === parseInt(val.sushi_id) ? (
								<Link
									to={`/recipethree/${val.sushi_id}`}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<button className="recipeBtn">See Recipe</button>
								</Link>
							) : val.tacos_id === parseInt(val.tacos_id) ? (
								<Link
									to={`/recipefour/${val.tacos_id}`}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<button className="recipeBtn">See Recipe</button>
								</Link>
							) : val.dessert_id === parseInt(val.dessert_id) ? (
								<Link
									to={`/recipefive/${val.dessert_id}`}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<button className="recipeBtn">See Recipe</button>
								</Link>
							) : val.hamburger_id === parseInt(val.hamburger_id) ? (
								<Link
									to={`/recipesix/${val.hamburger_id}`}
									style={{ textDecoration: 'none', color: 'black' }}
								>
									<button className="recipeBtn">See Recipe</button>
								</Link>
							) : null}
						</CardActions>
					</Card>
				</div>
			);
		});

		return (
			<div>
				<Navbar />
				{this.props.favorites[0] ? (
					<div className="outsideMain">{post}</div>
				) : (
					<div className="mainAdd">
						<h2>IT LOOKS THAT YOU HAVE NOTHING SAVED!!!</h2>
						<Link to="/recipes">
							<button className="btnRecipe">Recipes</button>
						</Link>
					</div>
				)}
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.reducer.username,
		favorites: state.food.favorites,
		chickens: state.food.chickens,
		hamburgers: state.food.hamburgers
	};
};
export default connect(mapStateToProps, {
	getUser,
	getFavorites,
	deleteFavorite,
	getChicken,
	getHamburgers
})(Favorites);
