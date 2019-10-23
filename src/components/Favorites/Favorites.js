// import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import Navbar from '../Navbar/Navbar';
// import './Favorites.css';
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
// 	favor: {
// 		marginTop: '10vh'
// 	}
// }));

// export default function Favorites(props) {
// 	const classes = useStyles();

// 	return (
// 		<div>
// 			<Navbar />
// 			<h1 className={classes.favor}>Favorites</h1>
// 		</div>
// 	);
// }

import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Card, CardMedia, Typography } from '@material-ui/core';
import { Carousel, CarouselSlide } from 'material-ui-carousel';
import Tacos from '../../Pics/main-tacos.png';
import Cupcakes from '../../Pics/cupcakes.png';
import Pizza from '../../Pics/pizza.png';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	cardSize: {
		width: '100%'
		// border: 'solid red'
	}
}));

export default function Favorites() {
	const classes = useStyles();

	const pictures = [ { image: Tacos }, { image: Cupcakes }, { image: Pizza } ];

	return (
		<div>
			<Navbar />
			<Carousel>
				{pictures.map(({ image, title }) => (
					<CarouselSlide key={image}>
						<Card className={classes.cardSize}>
							<CardMedia
								image={image}
								title={title}
								style={{
									height: '60vh',
									// paddingTop: '75%',
									width: '100%'
								}}
							/>
						</Card>
					</CarouselSlide>
				))}
			</Carousel>
		</div>
	);
}
