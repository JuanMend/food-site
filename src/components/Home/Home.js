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
	}
}));

export default function Home() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<Navbar />
			<Grid container className={classes.root}>
				<div>
					<img
						className={classes.homeImg}
						src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					/>
				</div>

				<Grid>
					<div>
						<img className={classes.mainImg} src={Main} />
					</div>
				</Grid>
				<Footer />
			</Grid>
		</div>
	);
}
