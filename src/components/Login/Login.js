import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh'
	},
	sideImg: {
		backgroundImage:
			'url(https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	}
}));

export default function Login() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Grid container component="main" className={classes.root}>
			<Grid item xs={false} sm={5} md={6} className={classes.sideImg} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square />
		</Grid>
	);
}
