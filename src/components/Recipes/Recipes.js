import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({}));

export default function Recipes() {
	const classes = useStyles();
	const theme = useTheme();

	return <div>Recipes</div>;
}
