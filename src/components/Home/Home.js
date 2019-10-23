import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Main from '../../Pics/Main-Page.png';
import Family from '../../Pics/family-smile.png';
import Footer from '../Footer/Footer';
import './Home.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme } from '@material-ui/core';
import { borders } from '@material-ui/system';
import { fade } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	root: {
		// height: '300vh'
		// border: 'solid red'
		backgroundColor: 'white'
	},
	homeImg: {
		width: 1440,
		height: 650
	},

	// titleFood: {
	// 	textAlign: 'center',
	// 	marginTop: '10vh',
	// 	borderBottom: '2px solid lightgray',
	// 	width: '40%',
	// 	lineHeight: '60px'
	// },
	aboutUsH1: {
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		width: '96vw'
	},
	divH1: {
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		marginBottom: '4vh'
	},

	btnLinks: {
		// border: 'solid red',
		height: '45vh',
		width: '65vw',
		justifyContent: 'center',
		alignItems: 'flex-end',
		display: 'flex',
		marginLeft: '33vw',
		marginTop: '20vh'
	},
	topImgDiv: {
		// justifyContent: 'center',
		// alignItems: 'center',
		// display: 'flex',
		width: '100%',
		height: '80vh',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundImage:
			'url(https://images.unsplash.com/photo-1491185841098-9ce20f966624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)'
	},

	infoAboutUs: {
		fontSize: '30px',
		width: '35%',
		height: '20vh',
		marginRight: '20px'
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	// Most of the Buttons
	btnRecipe: {
		marginRight: '20px',
		width: '230px',
		height: '50px',
		fontSize: '24px',
		background: '#3f51b5',
		color: 'white',
		border: '2px solid white',
		outline: 'none',
		cursor: 'pointer',
		borderRadius: '5px'
	},
	btnAbout: {
		width: '230px',
		height: '50px',
		fontSize: '24px',
		background: '#3f51b5',
		color: 'white',
		border: '2px solid white',
		outline: 'none',
		cursor: 'pointer',
		borderRadius: '5px'
	},

	button: {
		margin: theme.spacing(1),
		height: '50px',
		width: '230px',
		fontSize: '18px'
		// marginLeft: '10vw'
	},
	aboutButton: {
		margin: theme.spacing(4),
		height: '50px',
		width: '230px',
		fontSize: '18px'
	}
}));

export default function Home() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<Navbar />
			<Grid container className={classes.root}>
				<CssBaseline />

				<Grid item xs={12} sm={8} md={12} className={classes.topImgDiv}>
					<Grid item className={classes.btnLinks}>
						<Link to="/recipes" style={{ textDecoration: 'none', marginRight: '10px' }}>
							<Button variant="contained" color="primary" className="topBtnRecipe">
								Recipes
							</Button>
						</Link>
						<Link to="aboutus" style={{ textDecoration: 'none' }}>
							<Button variant="contained" color="primary" className="topBtnAbout">
								About Us
							</Button>
						</Link>
						<div className="mainHoldIcons">
							<ul className="iconsOnHome">
								<li>
									<InstagramIcon
										className="animated 2s bounce delay-1s"
										style={{ color: 'black', fontSize: '30px' }}
									/>
								</li>
								<li>
									<FacebookIcon
										className="animated 2s bounce delay-2s"
										style={{ color: 'white', fontSize: '30px' }}
									/>
								</li>
								<li>
									<TwitterIcon
										className="animated 2s bounce delay-3s"
										style={{ color: 'white', fontSize: '30px' }}
									/>
								</li>
							</ul>
						</div>
					</Grid>
				</Grid>

				<Grid>
					<div className={classes.divH1}>
						<h1 className="titleFood">TOP RATED FOOD</h1>
					</div>

					<div className="mainImg">
						<div className="hold">
							<div className="divForHam">
								<div className="hamRecipeBtn">
									<p className="titleRecipe">Get our Delicious hamburger Recipe</p>
									<Button variant="outlined" color="primary" className="hamBtn">
										Recipe
									</Button>
								</div>
							</div>
						</div>

						<div className="hold">
							<div className="divForTacos">
								<div className="tacosRecipeBtn">
									<p className="titleRecipe">Get our Delicious Tacos Recipe</p>
									<Button variant="outlined" color="primary" className="tacoBtn">
										Recipe
									</Button>
								</div>
							</div>
						</div>

						<div className="hold">
							<div className="divForSushi">
								<div className="sushiRecipeBtn">
									<p className="titleRecipe">Get our Delicious Sushi Recipe</p>
									<Button variant="outlined" color="primary" className="sushiBtn">
										Recipe
									</Button>
								</div>
							</div>
						</div>

						<div className="hold">
							<div className="divForDessert">
								<div className="dessertRecipeBtn">
									<p className="titleRecipe">Get our Delicious Desert Recipe</p>
									<Button variant="outlined" color="primary" className="desertBtn">
										Recipe
									</Button>
								</div>
							</div>
						</div>
					</div>
				</Grid>

				<Grid item xs={12} sm={12} md={10}>
					<div className={classes.aboutUsH1}>
						<h1 className="aboutUstitle">A LITTLE ABOUT US</h1>
					</div>
					<div className="aboutSection">
						<img className="familyImg" src={Family} />
						<p className="infoAboutUs">
							We Help our Customers lifes a little easier by giving them the recipes of the greatest food
							thier is to exist.
							<Link to="/aboutus" style={{ textDecoration: 'none' }}>
								<Button variant="outlined" color="primary" className={classes.aboutButton}>
									More About Us
								</Button>
							</Link>
						</p>
					</div>
				</Grid>
				<Footer />
			</Grid>
		</div>
	);
}
