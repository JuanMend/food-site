import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Side from '../Side/Side';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	routes: {
		[theme.breakpoints.between('xs', 'sm')]: {
			display: 'none'
		}
	},
	avatar: {
		marginRight: theme.spacing(2)
	}
}));

export default function NavBar(props) {
	// useEffect(() => {
	// 	props.getUserSession();
	// }, []);
	const classes = useStyles();
	const [ open, setOpen ] = useState(false);

	function toggleSide() {
		setOpen(!open);
	}

	return (
		<div>
			<div className={classes.root}>
				<Side open={open} toggleSide={toggleSide} />
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
								Food Site
							</Link>
						</Typography>

						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="Menu"
							onClick={toggleSide}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
		</div>
	);
}
