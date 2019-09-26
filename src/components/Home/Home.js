import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core';
import { borders } from '@material-ui/system';
import { fade } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	homeImg: {
		width: 1440,
		height: 650
	}
}));

export default function Home() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<Navbar />
			<Grid container>
				<div>
					<img
						className={classes.homeImg}
						src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					/>
				</div>
			</Grid>
		</div>
	);
}
