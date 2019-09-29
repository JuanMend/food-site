import React from 'react';
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

export default function Side(props) {
	const classes = useStyles();

	function handleClick() {
		props.logout();
	}

	return (
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
				<Divider />
				{/* <List>
					<ListItem className={classes.logout} onClick={handleClick}>
						<ListItemIcon>
							{' '}
							<Lock />{' '}
						</ListItemIcon>
						<ListItemText primary="Logout" />
					</ListItem>
				</List> */}
			</Drawer>
		</Hidden>
	);
}
