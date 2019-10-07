import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const useStyles = makeStyles((theme) => ({
	root: {
		height: '43vh',
		backgroundColor: '#fafafa'
	},
	ulList: {
		color: 'black',
		listStyleType: 'none',
		fontSize: '16px',
		lineHeight: '30px',
		// border: 'solid pink',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		height: '14vh',
		width: '50%',
		padding: '50px'
	},
	mainDivUl: {
		width: '70%'
	},
	iconsUl: {
		width: '30%'
	},
	contDiv: {
		marginTop: '2vh',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex'
	},
	ulListIcon: {
		listStyleType: 'none',
		cursor: 'pointer'
	},
	infoRecipe: {
		// border: 'solid red',
		color: 'red',
		height: '15%',
		width: '90%',
		fontSize: '13px',
		textAlign: 'center'
	}
}));

export default function Footer() {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<Grid container className={classes.root}>
			<div className={classes.contDiv}>
				<div className={classes.mainDivUl}>
					<ul className={classes.ulList}>
						<Link to="/recipes" style={{ textDecoration: 'none', color: 'black' }}>
							<li>RECIPES</li>
						</Link>
						<Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
							<li>CONTACT</li>
						</Link>
						<Link to="/aboutus" style={{ textDecoration: 'none', color: 'black' }}>
							<li>ABOUT US</li>
						</Link>
					</ul>
				</div>
				<div className={classes.iconsUl}>
					<ul className={classes.ulListIcon}>
						<li>
							<InstagramIcon style={{ color: 'black', fontSize: '30px' }} />
						</li>
						<li>
							<FacebookIcon style={{ color: 'black', fontSize: '30px' }} />
						</li>
						<li>
							<TwitterIcon style={{ color: 'black', fontSize: '30px' }} />
						</li>
					</ul>
				</div>
			</div>
			<div className={classes.infoRecipe}>
				<h1>All Recipes are for show they are not the real Ingredients for the food.</h1>
			</div>
		</Grid>
	);
}
