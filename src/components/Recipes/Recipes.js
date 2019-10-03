import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Sushi from '../../Pics/sushi.png';
import Hamburger from '../../Pics/hamburger.png';
import Tacos from '../../Pics/main-tacos.png';
import Cupcakes from '../../Pics/cupcakes.png';
import Pizza from '../../Pics/pizza.png';
import Healthy from '../../Pics/healthy.png';
import Chicken from '../../Pics/chicken.png';

const images = [
	{
		url: Hamburger,
		title: 'Burgers',
		width: '40%'
	},
	{
		url: Pizza,
		title: 'Pizza',
		width: '40%'
	},
	{
		url: Chicken,
		title: 'Chicken',
		width: '40%'
	},

	{
		url: Healthy,
		title: 'Healthy',
		width: '40%'
	},
	{
		url: Sushi,
		title: 'Sushi',
		width: '40%'
	},
	{
		url: Cupcakes,
		title: 'Dessert',
		width: '40%'
	}
];

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		flexWrap: 'wrap',
		marginTop: '9vh',
		display: 'flex',
		justifyContent: 'space-around',
		overflow: 'hidden'
	},
	gridList: {
		flexWrap: 'nowrap',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		// transform: 'translateZ(0)',
		marginTop: '9vh',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		overflow: 'hidden',
		width: '100%'
	},
	image: {
		position: 'relative',
		height: 200,
		[theme.breakpoints.down('xs')]: {
			width: '100% !important', // Overrides inline-style
			height: 100
		},
		'&:hover, &$focusVisible': {
			zIndex: 1,
			'& $imageBackdrop': {
				opacity: 0.15
			},
			'& $imageMarked': {
				opacity: 0
			},
			'& $imageTitle': {
				border: '4px solid currentColor'
			}
		}
	},
	focusVisible: {},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%'
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.4,
		transition: theme.transitions.create('opacity')
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`
	},
	imageMarked: {
		height: 3,
		width: 18,
		backgroundColor: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity')
	}
}));

export default function Recipes() {
	const classes = useStyles();
	// const theme = useTheme();

	return (
		<div>
			<Navbar />
			<div className={classes.root}>
				<GridList className={classes.gridList}>
					{images.map((image) => (
						<ButtonBase
							focusRipple
							key={image.title}
							className={classes.image}
							focusVisibleClassName={classes.focusVisible}
							style={{
								width: image.width
							}}
						>
							<span
								className={classes.imageSrc}
								style={{
									backgroundImage: `url(${image.url})`
								}}
							/>
							<span className={classes.imageBackdrop} />
							<span className={classes.imageButton}>
								<Typography
									component="span"
									variant="subtitle1"
									color="inherit"
									className={classes.imageTitle}
								>
									{image.title}
									<span className={classes.imageMarked} />
								</Typography>
							</span>
						</ButtonBase>
					))}
				</GridList>
			</div>
			{/* <Footer /> */}
		</div>
	);
}
