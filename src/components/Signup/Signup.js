import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({}));

export default function Signup() {
	const [ redirect, setRedirect ] = useState(false);
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Grid container component="main" className={classes.root}>
			<Grid item xs={false} sm={5} md={7} className={classes.signUpImg} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.mainSection}>
					<Typography component="h1" variant="h5">
						Sign Up To Continue
					</Typography>
					<form className={classes.form} noValidate autoComplete="off">
						<TextField
							variant="outline"
							margin="normal"
							required
							fullWidth
							id="username"
							label="username"
							className="username"
							name="username"
							autoComplete="off"
							autoFocus
						/>
						<TextField
							variant="outline"
							margin="normal"
							required
							fullWidth
							name="password"
							label="password"
							type="password"
							className="password"
							id="password"
							autoComplete="off"
						/>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
