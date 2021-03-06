import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../Redux/reducer';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Side from '../Side/Side';
import clsx from 'clsx';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	routes: {
		[theme.breakpoints.between('xs', 'sm')]: {
			display: 'none'
		}
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	}
}));

function Navbar(props) {
	useEffect(() => {
		props.getUser();
	}, []);
	const classes = useStyles();
	const [ open, setOpen ] = useState(false);

	function toggleSide() {
		setOpen(!open);
	}

	return (
		<div>
			<div className={classes.root}>
				<Side open={open} toggleSide={toggleSide} />
				<AppBar
					style={{ background: 'white' }}
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="black"
							aria-label="Menu"
							onClick={toggleSide}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							<Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
								Food-Recipes
							</Link>
						</Typography>
						{props.username ? (
							<div style={{ color: 'black', fontSize: '20px' }}>Welcome: {props.username}</div>
						) : null}
					</Toolbar>
				</AppBar>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		username: state.reducer.username
	};
};

export default connect(mapStateToProps, { getUser })(Navbar);
