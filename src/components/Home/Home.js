import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Main from '../../Pics/Main-Page.png';
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
		height: '200vh'
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
					{/* <img
						className={classes.homeImg}
						src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					/> */}
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
						<h1 className={classes.titleFood}>Top Rated Food</h1>
					</div>
					<div>
						<img className={classes.mainImg} src={Main} />
					</div>
				</Grid>
				<Footer />
			</Grid>
		</div>
	);
}
