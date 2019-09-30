import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
const useStyles = makeStyles((theme) => ({
	root: {
		height: '43vh',
		backgroundColor: 'black'
	},
	ulList: {
		color: 'white',
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
		// border: 'solid orange',
		width: '50%'
	},
	iconsUl: {
		// border: 'solid red',
		width: '40%'
	},
	contDiv: {
		// border: 'solid blue',
		marginTop: '2vh',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex'
	},
	ulListIcon: {
		listStyleType: 'none'
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
						<li>CONTACT</li>
						<li>ABOUT US</li>
						<li>HOME</li>
					</ul>
				</div>
				<div className={classes.iconsUl}>
					<ul className={classes.ulListIcon}>
						<li>
							<InstagramIcon style={{ color: 'white', fontSize: '30px' }} />
						</li>
						<li>
							<FacebookIcon style={{ color: 'white', fontSize: '30px' }} />
						</li>
						<li>
							<TwitterIcon style={{ color: 'white', fontSize: '30px' }} />
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
