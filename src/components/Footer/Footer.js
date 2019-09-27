import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '50vh',
		backgroundColor: 'black'
	},
	ulList: {
		color: 'white',
		listStyleType: 'none',
		fontSize: '16px',
		lineHeight: '30px',
		border: 'solid red',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		height: '14vh',
		width: '50%',
		padding: '50px'
	},
	mainDivUl: {
		border: 'solid red',
		width: '100%'
	}
}));

export default function Footer() {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<Grid container className={classes.root}>
			<div className={classes.mainDivUl}>
				<ul className={classes.ulList}>
					<li>CONTACT</li>
					<li>ABOUT US</li>
					<li>HOME</li>
				</ul>
			</div>
			<div>
				<ul>
					<li />
					<li />
					<li />
				</ul>
			</div>
		</Grid>
	);
}
