import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Recipes.css';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
// import tileData from './tileData';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Sushi from '../../Pics/main-sushi.png';
import Hamburger from '../../Pics/hamburger.png';
import Tacos from '../../Pics/main-tacos.png';
import Cupcakes from '../../Pics/cupcakes.png';
import Pizza from '../../Pics/pizza.png';
import Healthy from '../../Pics/healthy.png';
import Chicken from '../../Pics/chicken.png';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
		url: Tacos,
		title: 'Tacos',
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
		marginTop: '7vh',
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
	},
	card: {
		maxWidth: 325,
		marginTop: '10vh'
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	}
}));

export default function Recipes() {
	const classes = useStyles();
	const [ expanded, setExpanded ] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
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
			<Grid>
				<div className="mainCard">
					<Card className={classes.card}>
						<CardHeader
							action={
								<IconButton aria-label="settings">
									<MoreVertIcon />
								</IconButton>
							}
							title="Pizza"
						/>
						<CardMedia className={classes.media} image={Pizza} title="Paella dish" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								This impressive paella is a perfect party dish and a fun meal to cook together with your
								guests. Add 1 cup of frozen peas along with the mussels, if you like.
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>

							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more"
							>
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>Recipe:</Typography>
								<Typography paragraph>
									Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
									minutes.
								</Typography>
							</CardContent>
						</Collapse>
					</Card>

					<Card className={classes.card}>
						<CardHeader
							action={
								<IconButton aria-label="settings">
									<MoreVertIcon />
								</IconButton>
							}
							title="Pizza"
						/>
						<CardMedia className={classes.media} image={Chicken} title="Paella dish" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								This impressive paella is a perfect party dish and a fun meal to cook together with your
								guests. Add 1 cup of frozen peas along with the mussels, if you like.
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>

							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more"
							>
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>Recipe:</Typography>
								<Typography paragraph>
									Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
									minutes.
								</Typography>
							</CardContent>
						</Collapse>
					</Card>

					<Card className={classes.card}>
						<CardHeader
							action={
								<IconButton aria-label="settings">
									<MoreVertIcon />
								</IconButton>
							}
							title="Pizza"
						/>
						<CardMedia className={classes.media} image={Sushi} title="Paella dish" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								This impressive paella is a perfect party dish and a fun meal to cook together with your
								guests. Add 1 cup of frozen peas along with the mussels, if you like.
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>

							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more"
							>
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>Recipe:</Typography>
								<Typography paragraph>
									Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
									minutes.
								</Typography>
							</CardContent>
						</Collapse>
					</Card>

					<Card className={classes.card}>
						<CardHeader
							action={
								<IconButton aria-label="settings">
									<MoreVertIcon />
								</IconButton>
							}
							title="Pizza"
						/>
						<CardMedia className={classes.media} image={Cupcakes} title="Paella dish" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								This impressive paella is a perfect party dish and a fun meal to cook together with your
								guests. Add 1 cup of frozen peas along with the mussels, if you like.
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>

							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more"
							>
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>Recipe:</Typography>
								<Typography paragraph>
									Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
									minutes.
								</Typography>
							</CardContent>
						</Collapse>
					</Card>

					<Card className={classes.card}>
						<CardHeader
							action={
								<IconButton aria-label="settings">
									<MoreVertIcon />
								</IconButton>
							}
							title="Pizza"
						/>
						<CardMedia className={classes.media} image={Tacos} title="Paella dish" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								This impressive paella is a perfect party dish and a fun meal to cook together with your
								guests. Add 1 cup of frozen peas along with the mussels, if you like.
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>

							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more"
							>
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>Recipe:</Typography>
								<Typography paragraph>
									Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
									minutes.
								</Typography>
							</CardContent>
						</Collapse>
					</Card>
				</div>
			</Grid>
			<Footer />
		</div>
	);
}
