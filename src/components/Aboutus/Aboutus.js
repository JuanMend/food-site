import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Four from '../../Pics/mix-pic.png';
import './Aboutus.css';
import Footer from '../Footer/Footer';

import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
	root: {}
}));

export default function Aboutus() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<Navbar />
			<Grid className={classes.root}>
				<div className="topAboutImg" />
				<div className="bodyInfo">
					<img src={Four} className="imgFourFood" />
					<div className="insideInfo">
						<h1 className="textH1">WHO WE ARE</h1>
						<p className="para">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
						</p>
					</div>
				</div>
			</Grid>
			<Footer />
		</div>
	);
}
