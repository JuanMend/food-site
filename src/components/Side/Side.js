import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logOut, getUser } from '../../Redux/reducer';
import { getFavorites } from '../../Redux/food';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LockIcon from '@material-ui/icons/Lock';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	drawer: {
		[theme.breakpoints.down('lg')]: {
			width: 240,
			flexShrink: 0
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.down('lg')]: {
			display: 'none'
		}
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: 240
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	logout: {
		bottom: 0,
		cursor: 'pointer'
	},
	links: {
		textDecoration: 'none',
		color: 'inherit'
	}
}));

function Side(props) {
	useEffect(() => {
		props.getUser();
	}, []);

	const classes = useStyles();

	function handleLogout() {
		props.logOut();
	}

	return (
		<div>
			{props.username ? (
				<Hidden mdUp implementation="css">
					<Drawer
						variant="temporary"
						anchor="left"
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true
						}}
						open={props.open}
						onClose={props.toggleSide}
					>
						<List>
							<Link className={classes.links} to="/recipes">
								<ListItem button>
									<ListItemIcon>
										<FastfoodIcon />
									</ListItemIcon>
									<ListItemText primary="Recipes" />
								</ListItem>
							</Link>
							<Link className={classes.links} to="/favorites">
								<ListItem button>
									<ListItemIcon>
										<FavoriteIcon />
										{props.favorites.length ? `(${props.favorites.length})` : null}
									</ListItemIcon>
									<ListItemText primary="Favorites" />
								</ListItem>
							</Link>
							<Link className={classes.links} to="/aboutus">
								<ListItem button>
									<ListItemIcon>
										<InfoIcon />
									</ListItemIcon>
									<ListItemText primary="About us" />
								</ListItem>
							</Link>
							<Link className={classes.links} to="/contact">
								<ListItem button>
									<ListItemIcon>
										<ContactMailIcon />
									</ListItemIcon>
									<ListItemText primary="Contact" />
								</ListItem>
							</Link>
						</List>
						<Divider />
						<List>
							<ListItem className={classes.logout} onClick={handleLogout}>
								<ListItemIcon>
									<LockIcon />
								</ListItemIcon>
								<ListItemText primary="Logout" />
							</ListItem>
						</List>
					</Drawer>
				</Hidden>
			) : (
				<Hidden mdUp implementation="css">
					<Drawer
						variant="temporary"
						anchor="left"
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true
						}}
						open={props.open}
						onClose={props.toggleSide}
					>
						<List>
							<Link className={classes.links} to="/recipes">
								<ListItem button>
									<ListItemIcon>
										<FastfoodIcon />
									</ListItemIcon>
									<ListItemText primary="Recipes" />
								</ListItem>
							</Link>
							<Link className={classes.links} to="/aboutus">
								<ListItem button>
									<ListItemIcon>
										<InfoIcon />
									</ListItemIcon>
									<ListItemText primary="About us" />
								</ListItem>
							</Link>
							<Link className={classes.links} to="/contact">
								<ListItem button>
									<ListItemIcon>
										<ContactMailIcon />
									</ListItemIcon>
									<ListItemText primary="Contact" />
								</ListItem>
							</Link>
							<Link className={classes.links} to="/login">
								<ListItem button>
									<ListItemIcon>
										<ExitToAppIcon />
									</ListItemIcon>
									<ListItemText primary="Login" />
								</ListItem>
							</Link>
							<Link className={classes.links} to="/signup">
								<ListItem button>
									<ListItemIcon>
										<VpnKeyIcon />
									</ListItemIcon>
									<ListItemText primary="Sign up" />
								</ListItem>
							</Link>
						</List>
					</Drawer>
				</Hidden>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		username: state.reducer.username,
		favorites: state.food.favorites
	};
};

export default connect(mapStateToProps, { logOut, getUser, getFavorites })(Side);
