import React from 'react';
import { Link } from 'react-router-dom';

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
	},
	mainSection: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: theme.spacing(15, 3)
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		height: '6vh'
	}
}));

export default function Login() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Grid container component="main" className={classes.root}>
			<Grid item xs={false} sm={5} md={7} className={classes.sideImg} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.mainSection}>
					<Typography component="h1" variant="h5">
						Login To Continue
					</Typography>
					<form className={classes.form} noValidate autoComplete="off">
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							className="username"
							name="username"
							autoComplete="off"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							className="password"
							id="password"
							autoComplete="off"
						/>
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Login
						</Button>
						<Grid container>
							<Grid item>
								{'Dont have an account? '}
								<Link style={{ color: 'blue' }} to="/signup" variant="body2">
									Sign up
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
