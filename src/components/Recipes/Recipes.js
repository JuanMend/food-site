import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../Redux/reducer';
import { getPizza, getHamburgers, getChicken, getTacos, getDessert, getSushi } from '../../Redux/food';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Favorites from '../Favorites/Favorites';
import axios from 'axios';
import './Recipes.css';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

class Recipes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hamburgers: []
		};
	}

	componentDidMount() {
		this.props.getUser();
		this.props.getPizza();
		this.props.getHamburgers();
		this.props.getChicken();
		this.props.getSushi();
		this.props.getDessert();
		this.props.getTacos();
	}
	render() {
		console.log(this.props.hamburgers);
		console.log(this.props.pizzas);
		return (
			<div>
				<Navbar />
				{/* <Favorites favor={this.state.favorites} /> */}
				<div className="root">
					<div className="imgBackGround">
						<div className="welcomePeople">
							WELCOME FIND YOUR RECIPE
							{/* <TextField
								autoFocus
								id="outlined-search"
								label="Search"
								type="search"
								variant="outlined"
								className="searchBar"
								// value={term}
								// onChange={(e) => {
								// 	setTerm(e.target.value);
								// }}
							/> */}
						</div>
					</div>
				</div>
				<div className="gridCard">
					{this.props.chickens.map((val) => {
						return (
							<div className="mainCard">
								<Card className="card">
									<Link
										to={`/recipechicken/${val.chicken_id}`}
										style={{ textDecoration: 'none', color: 'black' }}
									>
										<CardHeader title={val.title} />
										<img src={val.image} />
									</Link>
									<CardContent>
										<Typography variant="body2" color="textSecondary" component="p">
											{/* Btn for Ingredients */}
										</Typography>
									</CardContent>
									<CardActions disableSpacing>
										<IconButton aria-label="add to favorites">
											<FavoriteIcon />
										</IconButton>
									</CardActions>
								</Card>
							</div>
						);
					})}
					{this.props.hamburgers.map((val) => {
						return (
							<div className="mainCard">
								<Card className="card">
									<Link
										to={`/recipehamburger/${val.hamburger_id}`}
										style={{ textDecoration: 'none', color: 'black' }}
									>
										<CardHeader title={val.title} />
										<img src={val.image} className="hamburgerLink" />
									</Link>
									<CardContent>
										<Typography variant="body2" color="textSecondary" component="p">
											{/* Btn for Ingredients */}
										</Typography>
									</CardContent>
									<CardActions disableSpacing>
										<IconButton aria-label="add to favorites">
											<FavoriteIcon />
										</IconButton>
									</CardActions>
								</Card>
							</div>
						);
					})}

					{this.props.pizzas.map((val) => {
						return (
							<div className="mainCard">
								<Card className="card">
									<Link
										to={`/recipepizza/${val.pizza_id}`}
										style={{ textDecoration: 'none', color: 'black' }}
									>
										<CardHeader title={val.title} />
										<img src={val.image} />
									</Link>
									<CardContent>
										<Typography variant="body2" color="textSecondary" component="p">
											{/* Btn for Ingredients */}
										</Typography>
									</CardContent>
									<CardActions disableSpacing>
										<IconButton aria-label="add to favorites">
											<FavoriteIcon />
										</IconButton>
									</CardActions>
								</Card>
							</div>
						);
					})}

					{this.props.sushi.map((val) => {
						return (
							<div className="mainCard">
								<Card className="card">
									<Link
										to={`/recipsushi/${val.sushi_id}`}
										style={{ textDecoration: 'none', color: 'black' }}
									>
										<CardHeader title={val.title} />
										<img src={val.image} />
									</Link>
									<CardContent>
										<Typography variant="body2" color="textSecondary" component="p" />
									</CardContent>
									<CardActions disableSpacing>
										<IconButton aria-label="add to favorites">
											<FavoriteIcon />
										</IconButton>
									</CardActions>
								</Card>
							</div>
						);
					})}
					{this.props.tacos.map((val) => {
						return (
							<div className="mainCard">
								<Card className="card">
									<Link
										to={`/recipetacos/${val.tacos_id}`}
										style={{ textDecoration: 'none', color: 'black' }}
									>
										<CardHeader title={val.title} />
										<img src={val.image} />
									</Link>
									<CardContent>
										<Typography variant="body2" color="textSecondary" component="p">
											{/* Btn for Ingredients */}
										</Typography>
									</CardContent>
									<CardActions disableSpacing>
										<IconButton aria-label="add to favorites">
											<FavoriteIcon />
										</IconButton>
									</CardActions>
								</Card>
							</div>
						);
					})}

					{this.props.desserts.map((val) => {
						return (
							<div className="mainCard">
								<Card className="card">
									<Link
										to={`/recipedessert/${val.dessert_id}`}
										style={{ textDecoration: 'none', color: 'black' }}
									>
										<CardHeader title={val.title} />
										<img src={val.image} />
									</Link>
									<CardContent>
										<Typography variant="body2" color="textSecondary" component="p">
											{/* Btn for Ingredients */}
										</Typography>
									</CardContent>
									<CardActions disableSpacing>
										<IconButton aria-label="add to favorites">
											<FavoriteIcon />
										</IconButton>
									</CardActions>
								</Card>
							</div>
						);
					})}
				</div>

				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.reducer.username,
		hamburgers: state.food.hamburgers,
		pizzas: state.food.pizzas,
		chickens: state.food.chickens,
		sushi: state.food.sushi,
		desserts: state.food.desserts,
		tacos: state.food.tacos
	};
};

export default connect(mapStateToProps, {
	getUser,
	getPizza,
	getHamburgers,
	getChicken,
	getTacos,
	getDessert,
	getSushi
})(Recipes);
