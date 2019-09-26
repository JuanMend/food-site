import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

export default function Signup() {
	const classes = useStyles();
	const theme = useTheme();

	return <Grid>Signup</Grid>;
}
