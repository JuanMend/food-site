import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '10vh'
	}
}));

export default function Aboutus() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<Navbar />
			<Grid>
				<div className={classes.root}>About us</div>
			</Grid>
		</div>
	);
}
