import React from 'react';
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
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		width: 700,
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	dense: {
		marginTop: theme.spacing(2)
	},

	menu: {
		width: 200
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto'
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200
		}
	}
}));

export default function Home() {
	const classes = useStyles();
	const theme = useTheme();
	const [ values, setValues ] = React.useState({
		search: ''
	});

	const handleChange = (search) => (event) => {
		console.log(event.target.value);
		setValues({ ...values, [search]: event.target.value });
	};

	return (
		<div>
			<div>
				<img
					className={classes.homeImg}
					src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
				/>
				{/* <form className={classes.container} noValidate autoComplete="off">
					<TextField
						id="outlined-search"
						label="Search"
						type="search"
						className={classes.textField}
						margin="normal"
						variant="outlined"
						onChange={handleChange('search')}
						value={values.search}
					/>
                </form> */}
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput
						}}
						inputProps={{ 'aria-label': 'search' }}
						onChange={handleChange('search')}
					/>
				</div>
			</div>
		</div>
	);
}
