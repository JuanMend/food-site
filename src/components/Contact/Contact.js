import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({}));

export default function Contact() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<Navbar />
			Contact
		</div>
	);
}
