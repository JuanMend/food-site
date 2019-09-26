import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { borders } from '@material-ui/system';

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
			<div>
				<img
					className={classes.homeImg}
					src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
				/>
			</div>
		</div>
	);
}
