import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
import { makeStyles, useTheme } from '@material-ui/styles';
import Sushi from '../../Pics/sushi.png';
import Hamburger from '../../Pics/hamburger.png';
import Tacos from '../../Pics/main-tacos.png';
import Cupcakes from '../../Pics/cupcakes.png';
import Pizza from '../../Pics/pizza.png';
import Healthy from '../../Pics/healthy.png';
import Chicken from '../../Pics/chicken.png';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '9vh',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden'
		// backgroundColor: theme.palette.background.paper
	},
	gridList: {
		flexWrap: 'nowrap',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)'
	},
	title: {
		// color: theme.palette.primary.light
	},
	titleBar: {
		background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
	}
}));

const tileData = [
	{
		img: Hamburger,
		title: 'Hamburgers',
		author: 'author'
	},
	{
		img: Pizza,
		title: 'Pizza',
		author: 'author'
	},
	{
		img: Chicken,
		title: 'Chicken',
		author: 'author'
	},
	{
		img: Tacos,
		title: 'Tacos',
		author: 'author'
	},
	{
		img: Healthy,
		title: 'Healthy',
		author: 'author'
	},
	{
		img: Sushi,
		title: 'Sushi',
		author: 'author'
	},
	{
		img: Cupcakes,
		title: 'Desserts',
		author: 'author'
	}
];

export default function Recipes() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<Navbar />
			<div className={classes.root}>
				<GridList className={classes.gridList} cols={2.5}>
					{tileData.map((tile) => (
						<GridListTile key={tile.img}>
							<img src={tile.img} alt={tile.title} />
							<GridListTileBar
								title={tile.title}
								classes={{
									root: classes.titleBar,
									title: classes.title
								}}
								actionIcon={
									<IconButton aria-label={`star ${tile.title}`}>
										<StarBorderIcon className={classes.title} />
									</IconButton>
								}
							/>
						</GridListTile>
					))}
				</GridList>
			</div>
		</div>
	);
}
