import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({}));

export default function Footer() {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<Grid>
			<div>Footer</div>
		</Grid>
	);
}
