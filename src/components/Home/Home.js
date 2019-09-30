import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Main from '../../Pics/Main-Page.png';
import Family from '../../Pics/family-smile.png';
import Footer from '../Footer/Footer';

import { makeStyles, useTheme } from '@material-ui/core';
import { borders } from '@material-ui/system';
import { fade } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '300vh'
	},
	homeImg: {
		width: 1440,
		height: 650
	},
	mainImg: {
		width: '100%',
		height: '110vh'
	},
	titleFood: {
		textAlign: 'center',
		marginTop: '10vh',
		borderBottom: '2px solid lightgray',
		width: '40%',
		lineHeight: '60px'
	},
	aboutUstitle: {
		textAlign: 'center',
		marginTop: '10vh',
		borderBottom: '2px solid lightgray',
		width: '40%',
		lineHeight: '60px'
	},
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
		height: '30vh',
		width: '40vw',
		justifyContent: 'center',
		alignItems: 'flex-end',
		display: 'flex'
	},
	topImgDiv: {
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		width: '100%',
		height: '80vh',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundImage:
			'url(https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)'
	},
	familyImg: {
		width: '40%',
		height: '40vh'
	},
	aboutSection: {
		padding: '20px',
		// border: 'solid red',
		justifyContent: 'flex-end',
		alignItems: 'center',
		display: 'flex',
		height: '80vh'
	},
	infoAboutUs: {
		fontSize: '30px',
		width: '35%',
		height: '20vh',
		marginRight: '20px'
		// border: 'solid red'
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
	}
}));

export default function Home() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<Navbar />
			<Grid container className={classes.root}>
				<div className={classes.topImgDiv}>
					<div className={classes.btnLinks}>
						<Link to="/recipes">
							<button className={classes.btnRecipe}>Recipes</button>
						</Link>
						<Link to="aboutus">
							<button className={classes.btnAbout}>About Us</button>
						</Link>
					</div>
				</div>

				<Grid>
					<div className={classes.divH1}>
						<h1 className={classes.titleFood}>TOP RATED FOOD</h1>
					</div>
					<div>
						<img className={classes.mainImg} src={Main} />
					</div>
				</Grid>
				<Grid>
					<div className={classes.aboutUsH1}>
						<h1 className={classes.aboutUstitle}>A LITTLE ABOUT US</h1>
					</div>
					<div className={classes.aboutSection}>
						<p className={classes.infoAboutUs}>
							We Help our Customers lifes a little easier by giving them the recipes of the greatest food
							thier is to exist.
						</p>
						<img className={classes.familyImg} src={Family} />
					</div>
				</Grid>
				<Footer />
			</Grid>
		</div>
	);
}
