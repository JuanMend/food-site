import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	homeImg: {
		width: 1440,
		height: 600
	}
}));

export default function Home() {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<div>
			<img
				className={classes.homeImg}
				src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
			/>
		</div>
	);
}
